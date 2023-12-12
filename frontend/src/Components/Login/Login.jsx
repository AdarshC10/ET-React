import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:3001/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((result) => {
          console.log(result);
          setPasswordError(result.data);
          if (result.data === "Success") {
           
              navigate("/homepage");
            
           
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear any previous error messages
    if (name === "email") {
      setEmailError("");
    } else if (name === "password") {
      setPasswordError("");
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!formData.email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!formData.password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="d-flex justify-content-center align-items-center  bg-secondary vh-100 image">
      <div className=" p-3 rounded w-25">
        <h2 className="text-center login">Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">{/* <strong>Email</strong> */}</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={formData.email} // Added value and onChange
              name="email"
              className="form-control rounded-0"
              onChange={handleInputChange} // Added onChange
            />
            <span className="text-danger">{emailError}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="password">{/* <strong >Password</strong> */}</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={formData.password} // Added value and onChange
              name="password"
              className="form-control rounded-0"
              onChange={handleInputChange} // Added onChange
            />
            <span className="text-danger">{passwordError}</span>
          </div>

          <button className="btn btn-default border w-100 colorbtn border-0 text-white rounded-3 text-decoration-none">
            Login
          </button>
          <p className="colorWhite">
            Forgotten password? <Link to="/forgot-password">Reset it</Link>
          </p>

          <p className="Account">New Here</p>
          <button className="btn btn-default border w-100 colorbtn border-0 text-white bg-success rounded-3 text-decoration-none">
            <Link to="/register" className="link">
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
