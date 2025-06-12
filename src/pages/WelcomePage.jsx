import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthUtils from '../AuthUtils';

const WelcomePage = () => {
  const [userEmail, setUserEmail] = useState('Guest');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    if (!AuthUtils.isLoggedIn()) {
      navigate('/login');
      return;
    }

    // Get current user data
    const currentUser = AuthUtils.getCurrentUser();
    if (currentUser && currentUser.email) {
      setUserEmail(currentUser.email);
    }
  }, [navigate]);

  const handleLogout = () => {
    AuthUtils.logout();
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome!</h1>
      <p>You are logged in as <strong>{userEmail}</strong></p>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '1rem' }}>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4CAF50',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Proceed to Homepage
          </button>
        </Link>
        
        <button 
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#f44336',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;