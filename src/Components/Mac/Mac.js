import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';
import Grid from '../../Layout/Grid';
import Article from './Article';

const Mac = () => {
  return (
    <StMain>
      <MainSection />
      <Grid>
        <Article />
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
        <section>섹션4</section>
        <section>섹션5</section>
        <section>섹션6</section>
        <section>섹션7</section>
        <section>섹션8</section>
        <section>섹션9</section>
        <section>섹션10</section>
        <section>섹션11</section>
      </Grid>
      <section>레티나 섹션</section>
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
      </Grid>
      <section>마이크 섹션</section>
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
      </Grid>
      <section>키보드 섹션</section>
      <Grid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
      </Grid>
      <section>연결성 섹션</section>
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
`;

export default Mac;
