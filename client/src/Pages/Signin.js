import React, { useState } from 'react';
import './Forms.css';
import axios from 'axios'

import { Nav } from 'react-bootstrap'

// Data: 
// username: Nico
// email: Nico@gmail.com
// password: Nico

const SignIn = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  // const [errorr, setErrorr] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  };

  //authorise log in
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const url = 'http://localhost:5002/api/auth'
      const { data: res } = await axios.post(url, data);
      sessionStorage.setItem("token", res.data);
      sessionStorage.setItem("useremail", data.email);
      window.location = '/Home';

    } catch (error) {

      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500) {

        console.log(error.response.data.message)

      }

    }
  }

  return (
    <div className="form-container">
      {/* Logo */}
      {/* Add your logo here */}
      <h2>Log In</h2>
      <form className="form">
        <label >Email:</label>
        <input className='email' id='email' onChange={handleChange} name="email" type="email" placeholder="Enter your email" required />
        {/* error message here  */}
        <label className='login-invalid-message-email'>
          <p>Email is incorrect or invalid!</p>
        </label>

        <label >Password:</label>
        <input className='password' id='password' onChange={handleChange} name="password" type="password" placeholder="Enter your password" required />
        {/* error message here  */}
        <label className='login-invalid-message-password' for='password'>
          <p>password is incorrect</p>
        </label>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="form-footer">
          <p>Don't Have An Account? <br></br><Nav.Link href='SignUp' style={{ textDecoration: 'none', color: '#fc525e', fontWeight: '700' }}>Sign Up</Nav.Link></p>
        </div>
      </form>
      <br></br>
      <br></br>
      <button className='subbut' onClick={handleSubmit}> Done </button>
    </div>
  );
};

export default SignIn;