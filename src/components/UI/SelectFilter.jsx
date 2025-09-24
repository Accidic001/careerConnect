import React from 'react';
import '../../styles/UI.css';

const SelectFilter = ({ 
  label, 
  value, 
  onChange, 
  options, 
  ariaLabel 
}) => {
  return (
    <div className="select-filter">
      <label className="select-label">{label}</label>
      <select 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        className="select-input"
        aria-label={ariaLabel}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;