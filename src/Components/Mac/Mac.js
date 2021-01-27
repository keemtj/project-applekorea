import React, { useLayoutEffect } from 'react';
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
import FaceTime from './FaceTime';
import Mike from './Mike';
import Scissor from './Scissor';
import TouchBar from './TouchBar';
import TouchId from './TouchId';
import Wifi from './Wifi';
import Thunderbolt from './Thunderbolt';

const Mac = () => {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'black';
  }, []);
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
      <Grid
        col={12}
        row={1}
        height={70}
        cgap={2.5}
        rgap={2.5}
        margin={'auto'}
        padding={2.5}
        width={100}
        maxWidth={145}
      >
        <FaceTime />
        <Mike />
      </Grid>
      <KeyboardSection />
      <Grid
        col={12}
        row={2}
        height={70}
        cgap={2.5}
        rgap={2.5}
        margin={'auto'}
        marginTop={-6}
        padding={2.5}
        width={100}
        maxWidth={145}
      >
        <Scissor />
        <TouchBar />
        <TouchId />
      </Grid>
      <ConnectivitySection />
      <Grid
        col={12}
        row={1}
        height={70}
        cgap={2.5}
        rgap={2.5}
        margin={'auto'}
        marginTop={-17.5}
        marginBottom={15}
        padding={2.5}
        width={100}
        maxWidth={145}
      >
        <Wifi />
        <Thunderbolt />
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
