import { useState, useMemo } from 'react';

export const useFilters = (jobs) => {
  const [filters, setFilters] = useState({
    search: '',
    type: 'All',
    field: 'All',
    location: 'All'
  });

  // Extract available options for filters
  const availableOptions = useMemo(() => {
    const types = [...new Set(jobs.map(job => job.type))];
    const fields = [...new Set(jobs.map(job => job.field))];
    const locations = [...new Set(jobs.map(job => job.location))];
    
    return { types, fields, locations };
  }, [jobs]);

  // Filter jobs based on current filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = !filters.search || 
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesType = filters.type === 'All' || job.type === filters.type;
      const matchesField = filters.field === 'All' || job.field === filters.field;
      const matchesLocation = filters.location === 'All' || job.location === filters.location;

      return matchesSearch && matchesType && matchesField && matchesLocation;
    });
  }, [jobs, filters]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({
        search: '',
        type: 'All',
        field: 'All',
        location: 'All'
      });
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  return {
    filters,
    filteredJobs,
    availableOptions,
    handleFilterChange
  };
};