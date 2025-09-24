import React from 'react';
import '../../styles/JobsModule.css';

const LoadingState = () => {
  return (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>Loading opportunities...</p>
    </div>
  );
};

export default LoadingState;