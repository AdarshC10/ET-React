import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });
  axios.defaults.withCredentials = true;
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:3001/forgot-password", {
          email: formData.email,
        })
        .then((result) => {
          console.log(result);
          if (result.data.Status === "Success") {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error response here
        });
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
    }
  };

  const validateForm = () => {
    let isValid = true;
    if (!formData.email) {
      setEmailError("Email is required");
      isValid = false;
    }
    return isValid;
  };

  return (
    <div className="d-flex justify-content-center align-items-center  bg-secondary vh-100 image">
      <div className=" p-3 rounded w-25">
        <h2 className="text-center login">Reset Password</h2>
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
          <button
            type="submit"
            className="btn btn-default border w-100 colorbtn border-0 text-white rounded-3 text-decoration-none"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;


