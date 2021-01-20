import React from 'react';
import styled from 'styled-components';

const Gpu = () => {
  return (
    <StSection>
      <StHeader>
        <h3>GPU</h3>
      </StHeader>
      <StContents>
        <StHeadline>
          <span>8코어 GPU</span>
          <span>아름다움을</span>
          <span>완성하는 야수성.</span>
        </StHeadline>
        <StParagraph>
          M1에 탑재된 8코어 GPU는 Apple이 제작한 그래픽 프로세서 중 단연코 가장
          앞선 성능을 자랑합니다. 세상에서 가장 빠른 PC용 통합 그래픽을 제공하는
          이 칩은 무려 5배나 빨라진 말도 안 되는 스피드의 그래픽 성능을
          보여주죠.
        </StParagraph>
      </StContents>
      <StButton>
        <StModalTrigger style={{ color: 'white' }}>
          M1이 그래픽 성능을 높여주는 비결 알아보기
        </StModalTrigger>
      </StButton>
      <StKeyword>
        <span>최대</span>
        <div>
          <span>5</span>
          <span>배</span>
        </div>
        <span style={{ lineHeight: '1.5' }}>더 빠른</span>
        <span style={{ lineHeight: '1.5' }}>그래픽 성능</span>
      </StKeyword>
      <StVideo src="videos/mac_gpu.mp4" type="video/mp4" autoPlay={true} />
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 2/1/2/13;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  overflow: hidden;

  position: relative;
`;

const StHeader = styled.header`
  padding: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 4.5rem;
  width: 45%;
  min-width: 55rem;
  font-size: 2rem;
`;

const StHeadline = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 7.5rem;
  font-weight: bolder;
  line-height: 1.2;

  & > :first-child {
    color: #ca3132;
  }
`;

const StParagraph = styled.p`
  margin-top: 3rem;
  width: 49.5rem;
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StButton = styled.div`
  padding: 0rem 0rem 4.5rem 4.5rem;
`;

const StModalTrigger = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const StKeyword = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 600;
  & > div {
    & > :first-child {
      font-size: 15rem;
    }
    & > :last-child {
      font-size: 9rem;
    }
  }
`;

const StVideo = styled.video`
  position: absolute;
  z-index: -1;
  height: 70rem;
`;

export default Gpu;
