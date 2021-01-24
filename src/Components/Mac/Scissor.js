import React from 'react';
import styled from 'styled-components';

const Scissor = () => {
  return (
    <StSection>
      <StHeader>
        <h3>가위식 메커니즘</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          <span>한 자를 쳐도, 한 줄을 쳐도,</span>
          <span>페이지를 넘어가도 언제나</span>
          <span>딱 좋은 느낌.</span>
        </StParagraph>
        <StImageWrapper>
          <StImage
            src="images/mac_scissor_mechanism.png"
            alt="가위식 메커니즘 이미지"
          />
        </StImageWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/1/1/7;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: linear-gradient(150deg, #124d86 0%, #14204e 100%);
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding: 0rem 4rem;
`;

const StParagraph = styled.p`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: 3rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StImage = styled.img`
  width: 50%;
  min-width: 28rem;
`;

export default Scissor;
