import React from 'react';

function CustomTextField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        style={{ padding: "5px", margin: "10px 0" }}
      />
    </div>
  );
}

export default CustomTextField;
