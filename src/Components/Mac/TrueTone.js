import React from 'react';
import styled from 'styled-components';

const TrueTone = () => {
  return (
    <StSection>
      <StHeader>
        <h3>True Tone 기술</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StImage src="images/mac_truetone.png" alt="트루톤 아이콘" />
          <StKeyword>
            <span>주변 조명에 맞춰</span>
            <span>자동 조정되는 화면 밝기.</span>
          </StKeyword>
        </StContents>
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/9/1/13;
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
  padding: 6rem;
`;

const StKeyword = styled.p`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  & > :first-child {
    margin-top: 5.5rem;
  }
  & > :last-child {
    margin-top: 1.5rem;
  }
`;

export default TrueTone;
