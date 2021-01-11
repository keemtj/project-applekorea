import React from 'react';
import styled from 'styled-components';
import Grid from '../../Layout/Grid';
import SectionAirpodsMax from './SectionAirpodsMax';
import SectionIphone12 from './SectionIphone12';
import SectionIphone12Pro from './SectionIphone12Pro';

const Home = () => {
  return (
    <StMain>
      <Grid col={1} row={3} height={70} cgap={0} rgap={1} paddingTop={1}>
        <SectionAirpodsMax />
        <SectionIphone12 />
        <SectionIphone12Pro />
      </Grid>
      <Grid
        col={2}
        row={3}
        height={50}
        cgap={1}
        rgap={1}
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={1}
        paddingRight={1}
      >
        <section
          style={{ gridArea: '1/1/1/1', border: '1px solid red' }}
        ></section>
        <section
          style={{ gridArea: '1/2/1/2', border: '1px solid blue' }}
        ></section>
        <section
          style={{ gridArea: '2/1/2/1', border: '1px solid green' }}
        ></section>
        <section
          style={{ gridArea: '2/2/2/2', border: '1px solid purple' }}
        ></section>
        <section
          style={{ gridArea: '3/1/3/1', border: '1px solid yellowgreen' }}
        ></section>
        <section
          style={{ gridArea: '3/2/3/2', border: '1px solid cyan' }}
        ></section>
      </Grid>
    </StMain>
  );
};

const StMain = styled.main`
  padding-top: 4.4rem;
`;

export default Home;
