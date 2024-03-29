import * as Yup from 'yup';

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  password: /^.{6,}$/,
};

const firstName = Yup.string()
  .matches(regx.name, 'від 2 до 20 символів')
  .required("Введіть ім'я");

const email = Yup.string()
  .matches(regx.email, 'Формат dovgalyukolya@gmail.com')
  .required('Введіть email');

const password = Yup.string()
  .matches(regx.password, 'Не менше 6 символів')
  .required('Введіть пароль');

export const schemas = {
  custom: Yup.object().shape({
    firstName,
    email,
    password,
  }),
};
export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};
