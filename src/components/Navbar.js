import React from 'react';
import '../styles/Navbar.css';

function Navbar({ userEmail, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>📷 Instagram</h2>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="🔍 Search" />
        </div>
        <div className="navbar-icons">
          <button className="icon-btn">❤️</button>
          <button className="icon-btn">💬</button>
          <button className="icon-btn">📤</button>
          <div className="user-profile">
            <span>👤</span>
            <div className="profile-dropdown">
              <p>Logged in as: {userEmail}</p>
              <button onClick={onLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
