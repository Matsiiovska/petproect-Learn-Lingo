import React from 'react';
import css from './Button.module.css';

const Button = ({ children }) => {
  return (
    <button type="submit" className={css.Button}>
      {children}
    </button>
  );
};

export default Button;
