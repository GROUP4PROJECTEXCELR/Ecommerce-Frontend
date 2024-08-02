import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Register.css';

export const Register = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Add logic to handle sign up (e.g., form validation, API call)
    console.log('Sign up form submitted');
    // Navigate to the login page after successful sign up
    navigate('/login'); // Change '/login' to your desired path
  };

  return (
    <div className='Register'>
      <div className="register-container">
        <h1>REGISTER</h1>
        <div className="register-fields">
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <input type='password' placeholder='Confirm Password'/>
          <input type='number' placeholder='Mobile Number'/>
        </div>
        <button onClick={handleSignUpClick}>Sign Up</button>
        
        <p className='register-login'>
          Already have an account? 
          <span onClick={() => navigate('/login')}><u>Login</u></span>
        </p>
        
      </div>
    </div>
  );
};
