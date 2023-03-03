import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, onClick }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#efefef] bg-opacity-50">
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="bg-[#efefef] w-[90%] md:w-[60%] h-[85%] rounded-lg shadow-lg">
          <div className="w-full h-[20%] bg-[#444444] rounded-t-lg flex justify-center items-center">
            <h1 className="text-2xl text-[#ffffff] font-bold tracking-[0.2rem]">
              {title}
            </h1>
            <button
              onClick={onClick}
              className="text-base p-2 md:p-[1em] bg-[#efefef] text-[#444444] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow absolute right-[0.5em] top-[0.5em] md:right-[1em] md:top-[1em]"
            >
              Close
            </button>
          </div>
          <div className="w-full h-[80%] flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
