import React, { createContext } from 'react';
import initialState from '../Reducer/mainReducer';

const MainContext = createContext(initialState);

const MainProvider = ({ children }) => {
  return <MainContext.Provider>{children}</MainContext.Provider>;
};

export { MainContext, MainProvider };
