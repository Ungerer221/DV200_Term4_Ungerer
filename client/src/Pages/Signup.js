import React from 'react';

import {Nav} from 'react-bootstrap'

import './Forms.css';

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
          <p>Already Have An Account? <Nav.Link href='/SignIn' style={{textDecoration:'none', color:'#fc525e',fontWeight:'700'}}>Login</Nav.Link></p>
        </div>
      </form>
      <br></br>
      <br></br>
      <button className='subbut'>Done</button>
    </div>
  );
};

export default SignUp;