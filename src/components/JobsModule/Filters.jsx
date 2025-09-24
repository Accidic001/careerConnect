import React from 'react';
import '../../styles/SearchFilters.css';

const Filters = ({ filters, onFilterChange, availableOptions }) => {
  const jobTypes = availableOptions?.types || ['All', 'Internship', 'Full-time', 'Part-time'];
  const jobFields = availableOptions?.fields || ['All', 'Technology', 'Marketing', 'Design', 'Business', 'Science'];
  const locations = availableOptions?.locations || ['All', 'Remote', 'New York, NY', 'Los Angeles, CA', 'Chicago, IL'];

  return (
    <div className="filters-container" role="group" aria-label="Job filters">
      <h3 className="filters-title">Filter By</h3>
      
      {/* Job Type Filter */}
      <div className="filter-group">
        <label htmlFor="job-type" className="filter-label">Job Type</label>
        <select 
          id="job-type"
          value={filters.type} 
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="filter-select"
          aria-describedby="type-help"
        >
          {jobTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <small id="type-help" className="filter-help">Filter by employment type</small>
      </div>

      {/* Field Filter */}
      <div className="filter-group">
        <label htmlFor="job-field" className="filter-label">Field</label>
        <select 
          id="job-field"
          value={filters.field} 
          onChange={(e) => onFilterChange('field', e.target.value)}
          className="filter-select"
          aria-describedby="field-help"
        >
          {jobFields.map(field => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>
        <small id="field-help" className="filter-help">Filter by industry field</small>
      </div>

      {/* Location Filter */}
      <div className="filter-group">
        <label htmlFor="job-location" className="filter-label">Location</label>
        <select 
          id="job-location"
          value={filters.location} 
          onChange={(e) => onFilterChange('location', e.target.value)}
          className="filter-select"
          aria-describedby="location-help"
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
        <small id="location-help" className="filter-help">Filter by job location</small>
      </div>

      {/* Clear Filters Button */}
      <button 
        onClick={() => onFilterChange('clear')}
        className="clear-filters-btn"
        aria-label="Clear all filters"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;