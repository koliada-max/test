import React, { useContext } from 'react';
import { Button } from '../../Ui/Button';
import Modal from '../../Ui/Modal';
import LoginPage from './LoginPage';
import { AppContext } from '../../../context';

interface StartPageProps {
  handleAuthorized(loggedIn: boolean): void;
}

const StartPage: React.FC<StartPageProps> = ({
  handleAuthorized,
}: StartPageProps) => {
  const { isAuthorized } = useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  function closeModal() {
    setOpen(false);
  }

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-10 flex justify-center items-center w-full h-full">
        {isAuthorized ? (
          <Button
            title="Logout"
            size="home"
            onClick={() => handleAuthorized(false)}
          />
        ) : (
          <Button title="Login" size="home" onClick={() => setOpen(true)} />
        )}
        {open && (
          <Modal title="Registration" onClick={closeModal}>
            <LoginPage
              closeModal={handleSubmit}
              setLoggedIn={handleAuthorized}
            />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default StartPage;
