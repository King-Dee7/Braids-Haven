import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Braids Haven</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h1 className="not-found-title">Page Not Found</h1>
          <p className="not-found-desc">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary not-found-btn">
            <ArrowLeft size={18} strokeWidth={2} />
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
