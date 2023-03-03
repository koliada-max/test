import React from 'react';
import Modal from '../../Ui/Modal';
import LoginForm from './LoginForm';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [open, setOpen] = React.useState(false);
  

  function closeModal() {
    setOpen(false);
  }

  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-10 flex justify-center items-center w-full h-full">
        <button
          onClick={() => setOpen(!open)}
          className="text-base px-[5em] py-[1.5em] bg-[#efefef] text-[#444444] rounded-lg font-bold tracking-[0.2rem] text-center outline-none butt-shadow "
        >
          Login
        </button>
        {open && (
          <Modal title="Registration" onClick={closeModal}>
            <LoginForm onClick={closeModal} />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default HomePage;