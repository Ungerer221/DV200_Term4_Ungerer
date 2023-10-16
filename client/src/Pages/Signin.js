import React from 'react';
import './Forms.css';

const SignIn = () => {
  return (
    <div className="form-container">
      {/* Logo */}
      {/* Add your logo here */}
      <h2>Log In</h2>
      <form className="form">
        <label >Email:</label>
        <input className='email' type="email" placeholder="Enter your email" required />

        <label >Password:</label>
        <input className='password' type="password" placeholder="Enter your password" required />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="form-footer">
          <p>Don't Have An Account? <br></br><span>Sign Up</span></p>
        </div>
      </form>
      <br></br>
      <br></br>
      <button className='subbut'>Done</button>
    </div>
  );
};

export default SignIn;