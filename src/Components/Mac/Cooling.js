import React from 'react';
import styled from 'styled-components';

const Cooling = () => {
  return (
    <StSection>
      <StHeader>
        <h3>열 효율</h3>
      </StHeader>
      <StHeadline>
        <span>액티브 쿨링으로 빠른 처리 속도를 유지합니다.</span>
      </StHeadline>
      <StVideo src="videos/mac_cooling.mp4" type="video/mp4" autoPlay={true} />
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 6/1/6/5;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background-color: #161516;
  overflow: hidden;

  position: relative;
  z-index: -2;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StHeadline = styled.p`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0rem 4rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StVideo = styled.video`
  height: 70rem;

  position: absolute;
  bottom: -4.5rem;
  z-index: -1;
`;

export default Cooling;
