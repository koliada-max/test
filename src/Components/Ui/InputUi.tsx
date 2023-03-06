import React from 'react';
import clsx from 'clsx';

type size = 'sm' | 'md' | 'home' | 'top' | 'todo';


interface InputUiProps {
  title?: string;
  type: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: size;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
  htmlFor?: string;
  step?: string;
  placeholder?: string;
}

const InputUi: React.FC<InputUiProps> = ({title, type, value, onChange, size, className, required, name, id, htmlFor, step, placeholder, ...props}) => {
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
        required={required}
        id={id}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputUi;
