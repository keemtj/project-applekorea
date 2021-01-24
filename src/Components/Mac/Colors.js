import React from 'react';
import styled from 'styled-components';

const Colors = () => {
  return (
    <StSection>
      <StHeader>
        <h3>넓은 색영역(P3)</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StImage src="images/mac_colors.jpg" alt="넓은 색영역(P3) 아이콘" />
          <StKeyword>
            <div>
              <span>25</span>
              <span>%</span>
            </div>
            <span>더 풍부한 색상(sRGB 대비)</span>
          </StKeyword>
        </StContents>
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/5/1/9;
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

const StKeyword = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  & > div > :first-child {
    font-size: 7.5rem;
    font-weight: 700;
  }
  & > div > :last-child {
    font-size: 6rem;
  }
  & > :last-child {
    margin-top: 1.5rem;
    font-size: 2.5rem;
  }
`;

export default Colors;
