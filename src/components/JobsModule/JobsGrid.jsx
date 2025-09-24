import React from 'react';
import JobCard from './JobCard';
import LoadingState from './LoadingState';
import '../../styles/JobsModule.css';

const JobsGrid = ({ jobs, loading, error }) => {
  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="error-state">
        <div className="container">
          <div className="error-content">
            <h3>Something went wrong</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="retry-btn">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="no-results">
        <div className="container">
          <div className="no-results-content">
            <h3>No jobs found</h3>
            <p>Try adjusting your filters or search terms</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="jobs-grid-section">
      <div className="container">
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsGrid;