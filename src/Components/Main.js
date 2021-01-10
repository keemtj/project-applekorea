import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';
import Articles from './Articles';

const Main = () => {
  return (
    <StMain>
      <MainSection />
      <Articles />
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
  max-width: 146rem;
  margin: 0 auto;
  color: white;
`;

export default Main;
