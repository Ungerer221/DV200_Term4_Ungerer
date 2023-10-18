import React from 'react';
import './Forms.css';
import { Link } from 'react-router-dom';

// import HomePage from './HomePage'

const SignUp = () => {

  // let content;
  // if (isLogged) {
  //   content = <HomePage />;
  // } else {
  //   content = <SignUp />;
  // }

  return (
    <div className="form-container">
      {/* Logo */}
      {/* Add your logo here */}
      <h2>Sign Up</h2>
      <form className="form">
        <label>Username:</label>
        <input className='uname' type="text" placeholder="Enter your username" required />
        <label >Email:</label>
        <input className='email' type="email" placeholder="Enter your email" required />
        <label >Password:</label>
        <input className='password' type="password" placeholder="Enter your password" required />
        <br></br>
        <div className="form-footer">
          <p>Already Have An Account? <span>Login</span></p>
        </div>
      </form>
      <br></br>
      <br></br>
      
      <Link to='/' className='subbut'>Done</Link>
    </div>
  );
};

export default SignUp;