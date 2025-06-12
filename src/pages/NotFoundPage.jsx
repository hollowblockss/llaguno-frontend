import React from 'react';
import '../styles/NotFound.css';

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-message">The link you followed to get here must be broken...</p>
    </div>
  );
}

export default NotFoundPage;
