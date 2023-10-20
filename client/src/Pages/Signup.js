import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Axios from 'axios'

import './Forms.css';

// import HomePage from './HomePage'

const SignUp = () => {

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  });

  // const [errorr, setErrorr] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(input.name);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:5002/api/createUser';
      const { data: res } = await Axios.post(url, data);
      // setErrorr(res.message);
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log("Error on user create Axios Post")
      }
    }
  }

  return (
    <div className="form-container">
      {/* Logo */}
      {/* Add your logo here */}
      <h2>Sign Up</h2>
      <form className="form">
        <label>Username:</label>
        <input className='uname' id='username' onChange={handleChange} name="username" type="text" placeholder="Enter your username" required />
        <label >Email:</label>
        <input className='email' id='email' onChange={handleChange} name="email" type="email" placeholder="Enter your email" required />
        <label >Password:</label>
        <input className='password' id='password' onChange={handleChange} name="password" type="password" placeholder="Enter your password" required />
        <br></br>
        <div className="form-footer">
          <p> Already Have An Account? <Nav.Link href='/SignIn' style={{ textDecoration: 'none', color: '#fc525e', fontWeight: '700' }}>Login</Nav.Link></p>
        </div>
      </form>
      <br></br>
      <br></br>
      <button className='subbut' onClick={handleSubmit} > Done </button>
    </div>
  );
};

export default SignUp;