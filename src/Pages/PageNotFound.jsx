import React from 'react';

function PageNotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <div className="container text-center mt-5 mt-5" >
      <h1 className="display-4 text-danger fw-bold mt-5" >404 - Page Not Found</h1>
      <p className="text-secondary fs-5 mt-">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
    </div>
  );
}

export default PageNotFound;
