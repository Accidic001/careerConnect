import React from 'react';
import '../../styles/SearchFilters.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <div className="search-bar" role="search">
        <label htmlFor="job-search" className="search-label">
          Search Jobs
        </label>
        <div className="search-input-wrapper">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            id="job-search"
            type="text"
            placeholder="Search by title, company, or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            aria-describedby="search-help"
          />
        </div>
        <small id="search-help" className="search-help">
          Search for job titles, company names, or keywords
        </small>
      </div>
    </div>
  );
};

export default SearchBar;