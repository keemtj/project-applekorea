import React from 'react';
import styled from 'styled-components';

// section tag: grid items
const Section = ({ section }) => {
  console.log(section);
  return (
    <StSection style={{ gridArea: `${section.gridArea}` }}>
      <StHeader>
        <h3>{section.headingText}</h3>
      </StHeader>
      <StContents>
        <div>
          <p>
            <span>8코어 CPU</span>
            <span>파워 그 자체.</span>
            <span>파워 그 자체2.</span>
          </p>
          <p>
            M1 칩은 MacBook Pro에 엄청나게 빠른 속도와 파워를 선사합니다. 8코어
            CPU가 이전 세대 대비 최대 2.8배 더 빨라진 프로세싱 속도를 뽐내며
            복잡한 워크플로도, 막대한 작업량도 거뜬히 처리해내죠. 게다가 모든
            작업에서 놀랄 만큼 탁월한 에너지 효율성을 발휘한답니다.
          </p>
          <p>
            이미지가 있으면 이미지,키ㅣ워드가 있으면 키워드, 둘다 있으면 둘다
            <span>키워드1</span>
            <span>키워드2</span>
            <span>키워드3</span>
            <span>이미지</span>
          </p>
        </div>
      </StContents>
      <button style={{ color: 'white' }}>모달 트리거</button>
      <div>
        <div>Bg 이미지 또는</div>
        <div>Bg 비디오</div>
      </div>
    </StSection>
  );
};

const StSection = styled.section`
  border-radius: 3rem;
  background: ${({ theme }) => theme.color.linearGradient};
`;

const StHeader = styled.header`
  margin: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
`;

const StContents = styled.div``;

export default Section;
