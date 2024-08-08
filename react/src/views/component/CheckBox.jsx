// components/Checkbox.jsx
import React from 'react';

const CheckBox = ({ input,key, label, onChangeCheck,...rest }) => {
  return (
    <label key={key} className="flex items-center space-x-2 w-1/2">
      <input
        {...input}
        {...rest}
        type="checkbox"
        onChange={onChangeCheck}
        className="checkbox checkbox-primary"
      />
     <span>{label}</span>
    </label>
  );
};

export default CheckBox;
