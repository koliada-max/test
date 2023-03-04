import React from 'react';
import { Button } from '../../Ui/Button';
import Modal from '../../Ui/Modal';
import LoginPage from './LoginPage';

interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = () => {
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  function closeModal() {
    setOpen(false);
  }

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-10 flex justify-center items-center w-full h-full">
        {loggedIn ? (
          <Button title="Logout" size="home" onClick={() => setLoggedIn(false)} />
        ) : (
          <Button title="Login" size="home" onClick={() => setOpen(true)} />
        )}
        {open && (
          <Modal title="Registration" onClick={closeModal}>
            <LoginPage closeModal={handleSubmit} setLoggedIn={setLoggedIn} />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default StartPage;
