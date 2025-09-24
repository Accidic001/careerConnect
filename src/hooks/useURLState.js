import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useURLState = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const getURLState = () => ({
    search: searchParams.get('search') || '',
    type: searchParams.get('type') || 'All',
    field: searchParams.get('field') || 'All',
    location: searchParams.get('location') || 'All'
  });

  const [filters, setFilters] = useState(getURLState);

  const updateURLState = (newFilters) => {
    const params = new URLSearchParams();
    
    if (newFilters.search) params.set('search', newFilters.search);
    if (newFilters.type !== 'All') params.set('type', newFilters.type);
    if (newFilters.field !== 'All') params.set('field', newFilters.field);
    if (newFilters.location !== 'All') params.set('location', newFilters.location);
    
    setSearchParams(params);
    setFilters(newFilters);
  };

  useEffect(() => {
    setFilters(getURLState());
  }, [searchParams]);

  return { filters, updateURLState };
};