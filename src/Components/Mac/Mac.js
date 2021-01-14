import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';
import Grid from '../../Layout/Grid';
// import Article from './Article';

const Mac = () => {
  return (
    <StMain>
      <MainSection />
      <Grid
        col={12}
        row={7}
        width={140}
        height={70}
        cgap={1.5}
        rgap={1.5}
        style={{ width: '140rem', margin: '0 auto' }}
      >
        {/* <Article /> */}
        {/* <row-start> / <column-start> / <row-end> / <column-end> */}
        <section style={{ gridArea: '1/1/1/13', border: '1px solid red' }}>
          섹션1
        </section>
        <section style={{ gridArea: '2/1/2/13', border: '1px solid orange' }}>
          섹션2
        </section>
        <section style={{ gridArea: '3/1/3/13', border: '1px solid yellow' }}>
          섹션3
        </section>
        <section style={{ gridArea: '4/1/4/13', border: '1px solid green' }}>
          섹션4
        </section>
        <section style={{ gridArea: '5/1/5/7', border: '1px solid skyblue' }}>
          섹션5
        </section>
        <section style={{ gridArea: '5/7/5/13', border: '1px solid blue' }}>
          섹션6
        </section>
        <section style={{ gridArea: '6/1/6/4', border: '1px solid purple' }}>
          섹션7
        </section>
        <section style={{ gridArea: '6/4/6/13', border: '1px solid red' }}>
          섹션8
        </section>
        <section style={{ gridArea: '7/1/7/5', border: '1px solid orange' }}>
          섹션9
        </section>
        <section style={{ gridArea: '7/5/7/9', border: '1px solid yellow' }}>
          섹션10
        </section>
        <section style={{ gridArea: '7/9/7/13', border: '1px solid green' }}>
          섹션11
        </section>
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
