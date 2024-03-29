import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './Registration.module.css';
import { initialValues, schemas } from './helper.js';
import { Input } from '../Input/Input';
import sprite from '../image/sprite.svg';
import Button from '../Button/Button';

export const Registration = () => {
  return (
    <div className={`${css.RegistrationCont} ${css.modalOverlay}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemas.custom}
        onSubmit={() => console.log('Success')}
      >
        {(
          { isValid, dirty } // Рендер функції з параметрами isValid та dirty з Formik
        ) => (
          <Form action="" className={css.form}>
            <div className={css.Blok}>
              <svg className={css.IconSvgX}>
                <use href={`${sprite}#icon-x-2`}></use>
              </svg>
              <h1 className={css.Zag}>Registration</h1>

              <p className={css.Par}>
                Thank you for your interest in our platform! In order to
                register, we need some information. Please provide us with the
                following information
              </p>
              <Input name="firstName" id="firstName" placeholder="Name" />
              <Input name="email" id="email" placeholder="Email" />
              <div className={css.InputCont}>
                <Input name="password" id="password" placeholder="Password" />

                <svg className={css.IconSvg}>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              </div>
              <Button>Sign Up</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
