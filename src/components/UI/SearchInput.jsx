import React from 'react';
import '../../styles/UI.css';

const SearchInput = ({ value, onChange, placeholder = "Search jobs..." }) => {
  return (
    <div className="search-input-container">
      <div className="search-input-wrapper">
        <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="search-input"
          aria-label="Search jobs"
        />
      </div>
    </div>
  );
};

export default SearchInput;