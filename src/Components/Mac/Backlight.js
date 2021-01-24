import React from 'react';
import styled from 'styled-components';

const Backlight = () => {
  return (
    <StSection>
      <StHeader>
        <h3>밝기</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StImage src="images/mac_backlight.png" alt="니트 밝기 아이콘" />
          <StKeyword>
            <span>500</span>
            <span>니트 밝기</span>
          </StKeyword>
        </StContents>
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/1/1/5;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background: #151516;
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row-reverse nowrap;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  font-size: 2rem;
`;

const StImage = styled.img`
  width: 100%;
  padding: 9rem;
`;

const StKeyword = styled.p`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  & > :first-child {
    font-size: 7.5rem;
    font-weight: 700;
  }
  & > :last-child {
    margin-top: 1.5rem;
    font-size: 2.5rem;
  }
`;

export default Backlight;
