import React from 'react';

const Input = ({ input, type, placeholder, className, label }) => {
  return (
    <div className="form-control mb-3">
      <label className="label">
        <span className="label-text">
          {label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ')}
        </span>
      </label>
      <input
        {...input} // Spread input props to handle value, onChange, etc.
        type={type ?? 'text'}
        placeholder={placeholder}
        className={`input input-sm  ${className}`}
      />
    </div>
  );
};

// Input.displayName = 'Input';  // Optional: Helps with debugging in React DevTools

export default Input;
