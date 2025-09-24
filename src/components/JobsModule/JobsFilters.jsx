import React from 'react';
import SearchInput from '../UI/SearchInput';
import SelectFilter from '../UI/SelectFilter';
import Button from '../UI/Button';
import '../../styles/JobsModule.css';

const JobsFilters = ({ 
  filters, 
  onFilterChange, 
  availableOptions,
  resultsCount,
  totalCount 
}) => {
  const jobTypeOptions = [
    { value: 'All', label: 'All Types' },
    ...availableOptions.types.map(type => ({ value: type, label: type }))
  ];

  const fieldOptions = [
    { value: 'All', label: 'All Fields' },
    ...availableOptions.fields.map(field => ({ value: field, label: field }))
  ];

  const locationOptions = [
    { value: 'All', label: 'All Locations' },
    ...availableOptions.locations.map(location => ({ value: location, label: location }))
  ];

  const handleClearFilters = () => {
    onFilterChange('clear');
  };

  const hasActiveFilters = filters.search || 
                          filters.type !== 'All' || 
                          filters.field !== 'All' || 
                          filters.location !== 'All';

  return (
    <section className="jobs-filters-section">
      <div className="container">
        <div className="filters-header">
          <h2>Find Opportunities</h2>
          <div className="results-info">
            <span className="results-count">
              Showing {resultsCount} of {totalCount} jobs
            </span>
            {hasActiveFilters && (
              <Button variant="outline" size="small" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        <div className="filters-grid">
          <div className="search-filter">
            <SearchInput
              value={filters.search}
              onChange={(value) => onFilterChange('search', value)}
              placeholder="Search by title, company, or keywords..."
            />
          </div>

          <SelectFilter
            label="Job Type"
            value={filters.type}
            onChange={(value) => onFilterChange('type', value)}
            options={jobTypeOptions}
            ariaLabel="Filter by job type"
          />

          <SelectFilter
            label="Field"
            value={filters.field}
            onChange={(value) => onFilterChange('field', value)}
            options={fieldOptions}
            ariaLabel="Filter by field"
          />

          <SelectFilter
            label="Location"
            value={filters.location}
            onChange={(value) => onFilterChange('location', value)}
            options={locationOptions}
            ariaLabel="Filter by location"
          />
        </div>
      </div>
    </section>
  );
};

export default JobsFilters;