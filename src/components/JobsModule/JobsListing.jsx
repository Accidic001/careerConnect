import React, { useMemo } from 'react';
import { useJobsData } from '../../hooks/useJobsData';
import { useFilters, filterJobs, getAvailableOptions } from '../../hooks/useFilters';
import JobCard from './JobCard';
import SearchBar from './SearchBar';
import Filters from './Filters';
import LoadingState from './LoadingState';
import '../../styles/JobsModule.css';
import '../../styles/SearchFilters.css';

const JobsListing = () => {
  const { jobs, loading, error } = useJobsData();
  const { filters, updateFilter } = useFilters();

  // Filter jobs based on current filters
  const filteredJobs = useMemo(() => {
    return filterJobs(jobs, filters);
  }, [jobs, filters]);

  // Get available options for filters
  const availableOptions = useMemo(() => {
    return getAvailableOptions(jobs);
  }, [jobs]);

  // Handle search input with debounce (simple version)
  const handleSearchChange = (value) => {
    updateFilter('search', value);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return (
      <div className="error-state" role="alert">
        <p>Error loading jobs: {error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <main className="jobs-module">
      <header className="module-header">
        <h1>Jobs & Internships</h1>
        <p>Find your next opportunity from our curated listings</p>
      </header>
      
      {/* Search and Filters Section */}
      <section className="filters-section" aria-label="Search and filter jobs">
        <div className="filters-row">
          <div>
            <SearchBar 
              searchTerm={filters.search}
              onSearchChange={handleSearchChange}
            />
          </div>
          
          <Filters 
            filters={filters}
            onFilterChange={updateFilter}
            availableOptions={availableOptions}
          />
        </div>
      </section>

      {/* Results Summary */}
      <div className="results-summary" role="status">
        <p>
          Showing <strong>{filteredJobs.length}</strong> of <strong>{jobs.length}</strong> jobs
          {filters.search && ` for "${filters.search}"`}
        </p>
      </div>
      
      {/* Jobs Grid */}
      <section aria-label="Job listings">
        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="no-results">
            <p>No job listings match your current filters.</p>
            <button 
              onClick={() => updateFilter('clear')}
              className="clear-filters-btn"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default JobsListing;