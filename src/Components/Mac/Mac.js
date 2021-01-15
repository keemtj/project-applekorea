import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';
import Grid from '../../Layout/Grid';
import Article from './Article';

const Mac = () => {
  const mainsectionlist = [
    '1/1/1/13',
    '2/1/2/13',
    '3/1/3/13',
    '4/1/4/13',
    '5/1/5/7',
    '5/7/5/13',
    '6/1/6/5',
    '6/5/6/13',
    '7/1/7/5',
    '7/5/7/9',
    '7/9/7/13',
  ];
  return (
    <StMain>
      <MainSection />
      <StGrid
        col={12}
        row={7}
        height={70}
        cgap={1.5}
        rgap={1.5}
        style={{ width: '140rem', margin: '0 auto' }}
      >
        {mainsectionlist.map((gridArea, i) => (
          <Article gridArea={gridArea} key={i} />
        ))}
        {/* <section style={{ gridArea: '1/1/1/13', border: '1px solid red' }}>
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
        </section> */}
      </StGrid>
      <section>레티나 섹션</section>
      <StGrid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
      </StGrid>
      <section>마이크 섹션</section>
      <StGrid>
        <section>섹션1</section>
        <section>섹션2</section>
      </StGrid>
      <section>키보드 섹션</section>
      <StGrid>
        <section>섹션1</section>
        <section>섹션2</section>
        <section>섹션3</section>
      </StGrid>
      <section>연결성 섹션</section>
      <StGrid>
        <section>섹션1</section>
        <section>섹션2</section>
      </StGrid>
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
  color: white;
`;

const StGrid = styled(Grid)`
  width: 140rem;
  margin: 0 auto;
`;

export default Mac;
