import React from 'react';
import styled from 'styled-components';
import Grid from '../../Layout/Grid';
import SectionAirpodsMax from './SectionAirpodsMax';
import SectionIpadAir from './SectionIpadAir';
import SectionIphone12 from './SectionIphone12';
import SectionIphone12Pro from './SectionIphone12Pro';
import SectionMacBookAir from './SectionMacBookAir';
import SectionMacBookPro from './SectionMacBookPro';
import SectionNewSeason from './SectionNewSeason';
import SectionNewStore from './SectionNewStore';
import SectionWatch from './SectionWatch';

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
        height={60}
        cgap={1}
        rgap={1}
        paddingTop={1}
        paddingBottom={1}
        paddingLeft={1}
        paddingRight={1}
      >
        <SectionWatch />
        <SectionIpadAir />
        <SectionMacBookAir />
        <SectionNewSeason />
        <SectionNewStore />
        <SectionMacBookPro />
      </Grid>
    </StMain>
  );
};

const StMain = styled.main`
  padding-top: 4.4rem;
`;

export default Home;
