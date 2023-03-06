import React from 'react';
import { LinkButton } from '../Ui/Button';

interface HeaderProps {
  type: 'home' | 'other';
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  return (
    <header className="w-full h-16 sm:h-20  bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-1 md:px-10 flex justify-center items-center w-full h-full relative">
        <div className="absolute right-[1em] top-[1em] md:right-[1em] md:top-[1em]">
          <LinkButton title="Back to Home" slug="/home" />
          {type === 'home' && <LinkButton title="Logout" slug="/" size="sm" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
