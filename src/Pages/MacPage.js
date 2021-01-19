import React from 'react';
import Header from '../Components/Global/Header';
import SubNavigation from '../Components/Global/SubNavigation';
import MacContainer from '../Containers/Mac/MacContainer';
import Footer from '../Components/Global/Footer';

const MacPage = () => {
  return (
    <>
      <Header />
      <SubNavigation />
      <MacContainer />
      <Footer />
    </>
  );
};

export default MacPage;
