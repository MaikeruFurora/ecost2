import React from 'react';

const Button = ({
  type = 'button', 
  onClick, 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  disabled = false
}) => {
  // Define base button styles
  const baseStyles = 'btn';
  
  // Define variant styles
  const variantStyles = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
  };
  
  // Define size styles
  const sizeStyles = {
    sm: 'btn-sm',
    md: '', // default size
    lg: 'btn-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
