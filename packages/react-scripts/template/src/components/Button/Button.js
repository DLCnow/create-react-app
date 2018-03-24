import React from 'react';

const Button = ({ onClick, children }) => (
  <button className="btn" {...{ onClick }}>
    {children}
  </button>
);

export default Button;
