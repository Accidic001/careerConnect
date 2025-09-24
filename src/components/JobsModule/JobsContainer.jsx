import React from 'react';
import { useJobs } from '../../hooks/useJobs';
import { useFilters } from '../../hooks/useFilters';
import JobsHero from './JobsHero';
import JobsFilters from './JobsFilters';
import JobsGrid from './JobsGrid';

const JobsContainer = () => {
  const { jobs, loading, error } = useJobs();
  const { filters, filteredJobs, availableOptions, handleFilterChange } = useFilters(jobs);

  return (
    <>
      <JobsHero />
      <JobsFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
        availableOptions={availableOptions}
        resultsCount={filteredJobs.length}
        totalCount={jobs.length}
      />
      <JobsGrid 
        jobs={filteredJobs}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default JobsContainer;