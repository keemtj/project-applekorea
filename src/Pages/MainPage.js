import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import Grid from '../Layout/Grid';

const MainPage = () => {
  return (
    <>
      <Header />
      <Grid col={12} row={2} cgap={2} rgap={2}>
        <Main />
      </Grid>
      <Footer />
    </>
  );
};

export default MainPage;
