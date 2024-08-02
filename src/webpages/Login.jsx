import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

export const Login = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register'); // Change '/register' to your desired path
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password'); // Change '/forgot-password' to your desired path
  };

  return (
    <div className='Login'>
      <div className="login-container">
        <h1>SIGN UP</h1>
        <div className="login-fields">
          <input type="text" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-signup'>
          Already have an account? 
          <span onClick={handleRegisterClick}><u>Register</u></span>
        </p>
        <div className='Forget'>
          <span onClick={handleForgotPasswordClick}><u>Forgot Password?</u></span>
        </div>
      </div>
    </div>
  );
};
