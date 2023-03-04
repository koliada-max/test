import React from 'react';
import { Button } from '../../Ui/Button';
import Modal from '../../Ui/Modal';
import LoginForm from './LoginForm';

interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = () => {
  const [open, setOpen] = React.useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-10 flex justify-center items-center w-full h-full">
        <Button title="Login" size="home" onClick={() => setOpen(!open)} />
        {open && (
          <Modal title="Registration" onClick={closeModal}>
            <LoginForm />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default StartPage;
