import React from 'react';

const Select = ({ options, value, onChange, className }) => {
  return (
    <select value={value} onChange={onChange} className={`select select-bordered ${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
