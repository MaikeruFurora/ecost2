import React from 'react';

const Select = ({ input,options, value, onChange, className, label, id }) => {
  return (
    <>
      <label htmlFor={id} className="label">
        <span className="label-text">
          {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
        </span>
      </label>
      <select 
        {...input}
        id={id} 
        value={value} 
        onChange={onChange} 
        className={`select select-bordered w-full ${className}`}
      >
        <option>  Please Select </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}> {option.name} </option>
        ))}
      </select>
    </>
  );
};

export default Select;
