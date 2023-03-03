import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { format } from 'date-fns';

interface LoginFormProps {
  onClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClick }) => {
  const initialValues = {
    username: '',
    lastName: '',
    email: '',
    birthday: '',
    password: '',
  };

  const validate = (values: typeof initialValues) => {
    const errors: { [key: string]: string } = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.birthday) {
      errors.birthday = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      birthday: ""
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const handleSubmit = (values: typeof initialValues) => {
    // Handle form submission
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      <Form onSubmit={formik.handleSubmit} className="w-[80%] h-[80%] flex flex-col gap-y-4 justify-evenly items-center py-5">
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />
        <Field type="text" name="lastName" placeholder="Last name" />
        <ErrorMessage name="lastName" component="div" />
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        <Field
          type="date"
          name="birthday"
          placeholder={format(new Date(), "dd.MM.yyyy ' Birthday '")}
          onChange={formik.handleChange}
          value={formik.values.birthday}
        />
        <ErrorMessage name="birthday" component="div" />
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        <button
          className="w-[80%] p-6 bg-[#444444] text-[#ffffff] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow"
          type="submit"
          onClick={onClick}
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
