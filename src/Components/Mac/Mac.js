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
        <section>섹션6</section>
        <section>섹션7</section>
        <section>섹션8</section>
        <section>섹션9</section>
        <section>섹션10</section>
        <section>섹션11</section>
      </Grid>
      <RetinaSection />
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
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
