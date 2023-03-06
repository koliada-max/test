import React, { PropsWithChildren, useContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './Components/Pages/HomePage/StartPage';
import Home from './Components/Pages/HomePage/Home';
import Converter from './Components/Pages/Converter/Converter';
import ToDoPage from './Components/Pages/ToDoPage/ToDoPage';
import Weather from './Components/Pages/Weather/Weather';
import { AppContext } from './context';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { isAuthorized } = useContext(AppContext);

  return isAuthorized ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AppContext.Provider value={{ isAuthorized }}>
      <Routes>
        <Route
          path="/"
          element={<StartPage handleAuthorized={setIsAuthorized} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/converter"
          element={
            <ProtectedRoute>
              <Converter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todo"
          element={
            <ProtectedRoute>
              <ToDoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/weather"
          element={
            <ProtectedRoute>
              <Weather />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
