import React, { useContext } from 'react';
import { Button } from '../../Ui/Button';
import { AppContext } from '../../../context';
import { Link } from 'react-router-dom';

interface StartPageProps {
  handleAuthorized(loggedIn: boolean): void;
}

const StartPage: React.FC<StartPageProps> = ({
  handleAuthorized,
}: StartPageProps) => {
  const { isAuthorized } = useContext(AppContext);

  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] px-10 flex justify-center items-center w-full h-full">
        {isAuthorized ? (
          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
            <Button
              title="Logout"
              size="home"
              onClick={() => handleAuthorized(false)}
            />
            <Link to="/home">
              <Button title="Go to HomePage" size="home" />
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <Button title="Login" size="home" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default StartPage;
