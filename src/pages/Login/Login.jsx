import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login-container'>
      <div className='login-card'>
        <img src={logo} className='login-logo' alt='Logo' />
        <h1>{signState}</h1>
        
        <form className='login-form'>
          {signState === "Sign Up" && (
            <input type='text' placeholder='Your Name' required className='login-input' />
          )}
          <input type='email' placeholder='Email' required className='login-input' />
          <input type='password' placeholder='Password' required className='login-input' />

          <button type='submit' className='login-button'>{signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='rememberMe' />
              <label htmlFor='rememberMe'>Remember Me</label>
            </div>
            <a href='#' className='help-link'>Need Help?</a>
          </div>
        </form>

        <div className='form-switch'>
          {signState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
