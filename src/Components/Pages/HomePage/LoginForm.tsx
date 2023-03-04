import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);

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
    } else if (values.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    return errors;
  };

  const handleSubmit = (values: typeof initialValues) => {
    setIsLoading(true);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="w-[80%] h-[80%] flex flex-col gap-y-4 justify-evenly items-center py-5">
          <Field type="text" name="username" placeholder="Username" required />
          <ErrorMessage
            name="username"
            component="div"
            className="text-red-500"
          />
          <Field type="text" name="lastName" required placeholder="Last name" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="text-red-500"
          />
          <Field type="email" name="email" required placeholder="Email" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
          <Field
            type="date"
            name="birthday"
            required
            placeholder={format(new Date(), "dd.MM.yyyy 'Birthday'")}
          />
          <ErrorMessage
            name="birthday"
            component="div"
            className="text-red-500"
          />
          <Field
            type="password"
            name="password"
            required
            placeholder="Password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500"
          />
          <Link to="/home" className="w-full flex justify-center">
            <button
              className="w-[80%] p-6 bg-[#444444] text-[#ffffff] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow"
              type="submit"
              disabled={!isValid || isLoading}
            >
              {isLoading ? 'Loading...' : 'Sign Up'}
            </button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
