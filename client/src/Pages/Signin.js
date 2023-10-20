import React, { useState } from 'react';
import './Forms.css';
import axios from 'axios'

import { Nav } from 'react-bootstrap'

// TODO Can't Login
// Data: 
// username: Nico
// email: Nico@gmail.com
// password: Nico
// Error: too many rerenders on sign in click

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

        <label >Password:</label>
        <input className='password' id='password' onChange={handleChange} name="password" type="password" placeholder="Enter your password" required />
        
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