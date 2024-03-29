import React from 'react';
import css from './Input.module.css';

import { Field, ErrorMessage as Error } from 'formik';

export const Input = ({ id, name, placeholder }) => {
  return (
    <div className={css.container_input}>
      <Field name={name} id={id} placeholder={placeholder} />
      <Error name={name}>{error => <span>{error}</span>}</Error>
    </div>
  );
};

export default Input;
