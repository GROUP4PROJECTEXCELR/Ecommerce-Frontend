import React, { useState } from 'react';
import './CSS/ForgotPassword.css';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('YOUR_FORGOT_PASSWORD_API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Password reset link sent');
        alert('Password reset link has been sent to your email');
      } else {
        console.log('Failed to send password reset link');
        alert('Email not found');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred while resetting the password');
    }
  };

  return (
    <div className='ForgotPassword'>
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder='Enter your email' 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};
