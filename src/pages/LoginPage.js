import React, { useState } from 'react';
import '../styles/LoginPage.css';
import LoginForm from '../components/LoginForm';

function LoginPage({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="instagram-logo">
            <h1>Instagram</h1>
          </div>
          <LoginForm onLogin={onLogin} />
        </div>
        <div className="signup-box">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
