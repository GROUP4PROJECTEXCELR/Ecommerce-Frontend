import React from 'react';
import './CSS/ForgotPassword.css';

export const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here (e.g., send reset password email)
    console.log('Forgot password form submitted');
  };

  return (
    <div className='ForgotPassword'>
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter your email' required />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};
