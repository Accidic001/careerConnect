import React from 'react';
import '../../styles/SearchFilters.css';

const SortOptions = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'deadline', label: 'Application Deadline' },
    { value: 'newest', label: 'Newest First' },
    { value: 'title', label: 'Job Title' },
    { value: 'company', label: 'Company Name' }
  ];

  return (
    <div className="sort-options">
      <label htmlFor="sort-by" className="filter-label">
        Sort by
      </label>
      <select 
        id="sort-by"
        value={sortBy} 
        onChange={(e) => onSortChange(e.target.value)}
        className="filter-select"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;