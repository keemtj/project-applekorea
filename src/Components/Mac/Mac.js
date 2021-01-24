import React from 'react';
import styled from 'styled-components';
import Grid from '../../Layout/Grid';
import MainSection from './MainSection';
import RetinaSection from './RetinaSection';
import FacetimeSection from './FacetimeSection';
import KeyboardSection from './KeyboardSection';
import ConnectivitySection from './ConnectivitySection';
import Cpu from './Cpu';
import Gpu from './Gpu';
import MachineLearning from './MachineLearning';
import Bigsur from './Bigsur';
import Speed from './Speed';
import AppCollection from './AppCollection';
import Cooling from './Cooling';
import Battery from './Battery';
import Memory from './Memory';
import Ssd from './Ssd';
import Security from './Security';
import Backlight from './Backlight';
import Colors from './Colors';
import TrueTone from './TrueTone';

const Mac = () => {
  return (
    <StMain>
      <MainSection />
      <Grid
        col={12}
        row={7}
        height={70}
        cgap={2.5}
        rgap={2.5}
        margin={'auto'}
        padding={2.5}
        width={100}
        maxWidth={145}
      >
        <Cpu />
        <Gpu />
        <MachineLearning />
        <Bigsur />
        <Speed />
        <AppCollection />
        <Cooling />
        <Battery />
        <Memory />
        <Ssd />
        <Security />
      </Grid>
      <RetinaSection />
      <Grid
        col={12}
        row={1}
        height={70}
        cgap={2.5}
        rgap={2.5}
        margin={'auto'}
        marginTop={6.5}
        padding={2.5}
        width={100}
        maxWidth={145}
      >
        <Backlight />
        <Colors />
        <TrueTone />
      </Grid>
      <FacetimeSection />
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
      </Grid>
      <KeyboardSection />
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
      </Grid>
      <ConnectivitySection />
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
      </Grid>
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
  color: white;
  overflow: hidden;
`;

export default Mac;
