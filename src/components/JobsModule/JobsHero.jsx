import React from 'react';
import '../../styles/JobsModule.css';

const JobsHero = () => {
  return (
    <section className="jobs-hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Find Your Dream 
            <span className="highlight"> Job or Internship</span>
          </h1>
          <p className="hero-subtitle">
            Discover amazing opportunities from top companies. 
            Filter by role, location, or company to find your perfect match.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Active Jobs</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsHero;