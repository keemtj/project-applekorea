import React from 'react';
import styled from 'styled-components';

const AppCollection = () => {
  return (
    <StSection>
      <StHeader>
        <h3>3 마이크 어레이</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          <span>스튜디오 없이도 스튜디오급 퀄리티.</span>
          <span> 프로급 마이크에 견줄 만큼 향상된 신호 대 잡음비.</span>
        </StParagraph>
        <StVideoWrapper>
          <StVideo src="videos/mac_mike.mp4" type="video/mp4" autoPlay={true} />
        </StVideoWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/8/1/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: #151516;
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
  width: 90%;
  margin-top: 3rem;
  color: #a0a0a5;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  & > :first-child {
    color: white;
  }
`;

const StVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4.5rem;
`;

const StVideo = styled.video`
  width: 100%;
  object-fit: scale-down;
`;

export default AppCollection;
