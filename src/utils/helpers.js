// Date formatting utilities
export const formatDate = (dateString, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Date(dateString).toLocaleDateString('en-US', {
    ...defaultOptions,
    ...options
  });
};

// Deadline calculation
export const calculateDaysLeft = (deadline) => {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Salary formatting
export const formatSalary = (salary) => {
  if (!salary) return null;
  
  // Handle hourly rates
  if (salary.includes('/hr')) {
    return salary;
  }
  
  // Handle yearly salaries
  const numbers = salary.match(/\d+/g);
  if (numbers) {
    const formatted = numbers.map(num => 
      parseInt(num).toLocaleString()
    ).join(' - ');
    return `$${formatted}`;
  }
  
  return salary;
};

// Search highlighting
export const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
};