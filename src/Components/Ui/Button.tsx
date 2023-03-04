import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type size = 'sm' | 'md' | 'home' | 'top' | 'todo';

interface LinkButtonProps {
  title: string;
  slug: string;
  size?: size;
  className?: string;
}

interface ButtonProps {
  title: string;
  size?: size;
  type?: 'button' | 'submit' | 'reset' | 'reset';
  className?: string;
  onClick?: () => void;

}

export const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  slug,
  size,
  className,
  ...props
}) => {
  return (
    <Link to={slug}>
      <button
        type="button"
        className={clsx(
          'text-base p-2 md:p-[1em] bg-[#efefef] text-[#444444] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow',
          className,
          {
            'ml-10': size === 'sm',
            'w-24 h-16': size !== 'sm' && size === 'md',
            '!px-[5em] !py-[1.5em] w-[265px]': size !== 'sm' && size !== 'md' && size === 'home',
            
          }
        )}
        {...props}
      >
        {title}
      </button>
    </Link>
  );
};

export const Button: React.FC<ButtonProps> = ({
  title,
  size,
  className,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
      <button
        type={type}
        onClick={onClick}
        className={clsx(
          'text-base p-2 md:p-[1em] bg-[#efefef] text-[#444444] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow',
          className,
          {
            'w-24 h-16': size === 'sm',
            'h-16 w-[265px]': size === 'md',
            'mt-10 w-[265px]': size === 'top',
            '!px-[5em] !py-[1.5em]': size !== 'sm' && size !== 'md' && size === 'home',
            'w-24': size === 'todo',
          }
        )}
        {...props}
      >
        {title}
      </button>
  );
};
