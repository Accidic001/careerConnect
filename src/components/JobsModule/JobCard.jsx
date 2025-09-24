import React from 'react';
import Button from '../UI/Button';
import '../../styles/JobsModule.css';

const JobCard = ({ job, index }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const daysLeft = getDaysLeft(job.deadline);
  const isUrgent = daysLeft <= 3 && daysLeft >= 0;
  const isExpired = daysLeft < 0;

  const getStatusBadge = () => {
    if (isExpired) {
      return { label: 'Expired', type: 'expired' };
    }
    if (isUrgent) {
      return { label: 'Urgent', type: 'urgent' };
    }
    if (daysLeft <= 7) {
      return { label: 'Ending Soon', type: 'warning' };
    }
    return null;
  };

  const statusBadge = getStatusBadge();

  return (
    <article className="job-card" style={{ animationDelay: `${index * 0.1}s` }}>
      {statusBadge && (
        <div className={`job-badge job-badge-${statusBadge.type}`}>
          {statusBadge.label}
        </div>
      )}
      
      <div className="job-card-header">
        <div className="job-meta">
          <span className="job-type">{job.type}</span>
          <span className="job-field">{job.field}</span>
        </div>
        <div className="company-info">
          <div className="company-avatar">
            {job.company.charAt(0)}
          </div>
          <div className="company-details">
            <h3 className="job-title">{job.title}</h3>
            <p className="company-name">{job.company}</p>
          </div>
        </div>
      </div>

      <div className="job-card-body">
        <p className="job-description">{job.description}</p>
        
        <div className="job-details">
          <div className="detail-item">
            <svg viewBox="0 0 20 20" fill="currentColor" className="detail-icon">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{job.location}</span>
          </div>
          
          {job.salary && (
            <div className="detail-item">
              <svg viewBox="0 0 20 20" fill="currentColor" className="detail-icon">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span>{job.salary}</span>
            </div>
          )}
        </div>
      </div>

      <div className="job-card-footer">
        <div className="deadline-info">
          <span className="deadline-label">Apply by:</span>
          <span className="deadline-date">{formatDate(job.deadline)}</span>
          {!isExpired && (
            <span className="days-left">({daysLeft} days left)</span>
          )}
        </div>
        <Button
          variant={isExpired ? "disabled" : "primary"}
          size="small"
          onClick={() => !isExpired && window.open(job.applyUrl, '_blank')}
          disabled={isExpired}
        >
          {isExpired ? 'Expired' : 'Apply Now'}
        </Button>
      </div>
    </article>
  );
};

export default JobCard;