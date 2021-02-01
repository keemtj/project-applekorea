import React from 'react';
import Modal from './Components/Global/Modal';
import MainRouter from './Router/MainRouter';
import ResetStyle from './Style/ResetStyle';

const App = () => {
  return (
    <>
      <MainRouter />
      <ResetStyle />
      <Modal />
    </>
  );
};

export default App;
