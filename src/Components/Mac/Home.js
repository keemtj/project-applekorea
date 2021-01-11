import React from 'react';
import styled from 'styled-components';

import Grid from '../../Layout/Grid';
import SectionAirpodsMax from './SectionAirpodsMax';

const Home = () => {
  return (
    <StMain>
      <Grid col={1} row={3} cgap={0} rgap={1} paddingTop={4.4}>
        <SectionAirpodsMax />
      </Grid>
      <Grid>섹션2</Grid>
    </StMain>
  );
};

const StMain = styled.main`
  padding-top: 4.4rem;
`;

export default Home;
