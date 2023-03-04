import React from 'react';

interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({title}) => {
  return (
    <div className="pt-10 md:pt-28">
      <h1 className="text-[#444444] text-2xl sm:text-3xl font-bold tracking-[0.2rem]">
        {title}
      </h1>
    </div>
  );
};

export default TitleComponent;
