// components/Input.jsx

import React, { forwardRef } from 'react';

const Input = forwardRef(({ type = 'text', name,value, onChange, placeholder, className, ...rest }, ref) => {
  return (
    <div className="form-control mb-3">
    <label className="label">
        <span className="label-text">{name.charAt(0).toUpperCase() + name.slice(1).replace(/_/g, ' ')}</span>
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`input input-bordered input-md ${className}`}
      ref={ref}  // Ensure ref is passed correctly
      {...rest}
    />
    </div>
  );
});

Input.displayName = 'Input';  // Optional: Helps with debugging in React DevTools

export default Input;
