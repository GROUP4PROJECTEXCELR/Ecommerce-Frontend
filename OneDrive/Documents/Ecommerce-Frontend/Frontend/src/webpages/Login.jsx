import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('YOUR_LOGIN_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        // Store user data, e.g., token, in local storage
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect to home page or dashboard
        navigate('/dashboard'); // Change '/dashboard' to your desired path
      } else {
        console.log('Login failed');
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  return (
    <div className='Login'>
      <div className="login-container">
        <h1>LOGIN</h1>
        <div className="login-fields">
          <input 
            type="text" 
            placeholder='Email Address' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Continue</button>
        <p className='login-signup'>
          Don't have an account? 
          <span onClick={handleRegisterClick}><u>Register</u></span>
        </p>
        <div className='Forget'>
          <span onClick={handleForgotPasswordClick}><u>Forgot Password?</u></span>
        </div>
      </div>
    </div>
  );
};
