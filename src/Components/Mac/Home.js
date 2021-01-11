import React from 'react';
import styled from 'styled-components';

import Grid from '../../Layout/Grid';
import SectionAirpodsMax from './SectionAirpodsMax';
import SectionIphone12 from './SectionIphone12';
import SectionIphone12Pro from './SectionIphone12Pro';

const Home = () => {
  return (
    <StMain>
      <Grid col={1} row={3} cgap={0} rgap={1}>
        <SectionAirpodsMax />
        <SectionIphone12 />
        <SectionIphone12Pro />
      </Grid>
      <Grid>
        <section style={{ height: '500rem' }}></section>
      </Grid>
    </StMain>
  );
};

const StMain = styled.main`
  padding-top: 4.4rem;
`;

export default Home;
