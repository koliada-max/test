import React from 'react';
import clsx from 'clsx';

type size = 'sm' | 'md' | 'home' | 'top' | 'todo';


interface InputUiProps {
  title?: string;
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: size;
  className?: string;
  name?: string;
  id?: string;
  htmlFor?: string;
  step?: string;
}

const InputUi: React.FC<InputUiProps> = ({title, type, value, onChange, size, className, name, id, htmlFor, step, ...props}) => {
  return (
    <label htmlFor={htmlFor} className={clsx("text-[#444444] text-xl font-bold tracking-[0.2rem] w-[70%]", className,
    {
      'w-[70%]': size === 'sm',
    })}{...props}>
      {title}
      <input
        name={name}
        type={type}
        step={step}
        value={value}
        onChange={onChange}
        required
        id={id}
      />
    </label>
  );
};

export default InputUi;
