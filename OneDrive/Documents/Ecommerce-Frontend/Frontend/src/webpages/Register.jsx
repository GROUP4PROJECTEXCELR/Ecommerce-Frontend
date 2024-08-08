import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Register.css';

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSignUpClick = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('YOUR_REGISTER_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, mobileNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful', data);
        // Navigate to the login page after successful sign up
        navigate('/login'); // Change '/login' to your desired path
      } else {
        console.log('Registration failed');
        alert('Failed to register');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className='Register'>
      <div className="register-container">
        <h1>REGISTER</h1>
        <div className="register-fields">
          <input 
            type="text" 
            placeholder='Name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input 
            type="password" 
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input 
            type='number' 
            placeholder='Mobile Number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
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
