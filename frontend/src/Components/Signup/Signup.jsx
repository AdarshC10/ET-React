import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
   
  });
  const [errors, setErrors] = useState({});
 

  
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
     
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address Uppercase not allowed';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };







  const handleSubmit= (e)=>{
   e.preventDefault()
   if (validateForm()) {
    // Form data is valid, you can send it to your server or perform other actions
   
     //axios to post the data
   axios.post("http://localhost:3001/register",{ 
    name:formData.name , 
    email:formData.email ,
     password:formData.password
     })
   .then(result => {
    console.log(result) ;
    console.log( formData);
    navigate('/login ');
    alert('Registered Successfully')
     
   })
   .catch(err=>console.log(err)) ;//then going to server side mongo db
   
  }
   


  }



  return (
    <div className='d-flex justify-content-center align-items-center  bg-secondary vh-100'>
    <div className='cards p-3 rounded w-25' >
      <h2 className='text-center register'>Register</h2>
      <br />
      <form  onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor='name' >
            <strong>Name</strong>
          </label>
          <input 
          type="text"
          placeholder='Enter Name'
          autoComplete='off'
          
           name="name"
           value={formData.name}
            className='form-control rounded-0'
            onChange={handleInputChange}
            />
            {errors.name && <span style={{color:"red", fontSize:"14px" }}>{errors.name}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor='email'  >
            <strong>Email</strong>
          </label>
          <input 
          type="email"
          placeholder='Enter Email'
          autoComplete='off'
         
          name="email"
          value={formData.email}
          className='form-control rounded-0'
          onChange={ handleInputChange}
         />
          {errors.email && <span style={{color:"red", fontSize:"14px" }}>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label  htmlFor='password' >
            <strong>Password</strong>
          </label>
          <input 
          type="password"
          placeholder='Enter Password'
          name="password"
          
          value={formData.password}
          className='form-control rounded-0'
          onChange={handleInputChange}
          />
          {errors.password && <span style={{color:"red", fontSize:"14px" }}>{errors.password}</span>}
        </div>
        <button type='submit' className='btn colorregister w-100 rounded-3'>
          Register
        </button>
        <br />
        </form>
        <br />
        <p className='acclink' >Already Have An Account ?</p>
        <Link to="/login"  className='btn btn-default border-0 w-100 color-btn text-white bg-primary rounded-3 text-decoration-none'>
          Login
        </Link>
     

    </div>
    </div>
  )
}

export default Signup