import React from 'react'

const Button = ({label, className}) => {
  return (
    <div className={`px-4 py-2 ${className}`}>{label}</div>
  ) 
};

export default Button;