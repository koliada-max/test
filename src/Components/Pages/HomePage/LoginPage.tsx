import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Icon from '../../Ui/Icon';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  closeModal: () => void;
  setLoggedIn: (value: boolean) => void;
}

const fieldData = [
  {
    id: 1,
    type: 'text',
    name: 'username',
    placeholder: 'Username',
    value: '',
  },
  {
    id: 2,
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    value: '',
  },
  {
    id: 3,
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    value: '',
  },
  {
    id: 4,
    type: 'date',
    name: 'birthday',
    placeholder: 'dd.MM.yyyy Birthday',
    value: '',
  },
];

const LoginPage: React.FC<LoginPageProps> = ({ closeModal, setLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const formData = {
    username: '',
    lastName: '',
    email: '',
    birthday: '',
    password: '',
  };

  const navigate = useNavigate();

  const handleSubmit = (values: typeof formData, actions: any) => {
    console.log(values);
    actions.setSubmitting(false);
    setLoggedIn(true);
    closeModal();
    navigate('/home');
  };

  const handleShowPassword = (showPassword: boolean, setShowPassword: any) => () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik initialValues={formData} onSubmit={handleSubmit}>
      {({ values, handleChange }) => (
        <Form className="w-[80%] h-[85%] flex flex-col gap-y-4 justify-evenly items-center py-5">
          {fieldData.map((field) => (
            <Field
              key={field.id}
              type={field.type}
              name={field.name}
              value={values[field.name as keyof typeof formData]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
            />
          ))}

          <div className="relative w-full">
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={handleShowPassword(showPassword, setShowPassword)}
              className="absolute top-0 right-0 m-3 focus:outline-none"
            >
              {showPassword ? (
                <Icon name="eye-open" className="" />
              ) : (
                <Icon name="eye-closed" className="" />
              )}
            </button>
          </div>
          <button
            className="w-[80%] p-4 bg-[#444444] text-[#ffffff] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow"
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
