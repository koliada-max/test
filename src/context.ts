import React from 'react';

export const AppContext = React.createContext<{ isAuthorized: boolean }>({
  isAuthorized: false,
});
