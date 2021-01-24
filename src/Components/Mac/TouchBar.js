import React from 'react';
import styled from 'styled-components';

const TouchBar = () => {
  return (
    <StSection>
      <StHeader>
        <h3>Touch Bar</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          <span>원하는 결과로 가는 다양한 지름길.</span>
          <span>
            {' '}
            더욱 다양해진 단축키 및 기능들을 만나볼까요? 즐겨 쓰는 이모티콘,
            선호 언어 선택은 물론 Siri 호출도 더욱 빠르게 할 수 있습니다.
          </span>
        </StParagraph>
        <StImageWrapper>
          <StImage src="images/mac_touchbar.jpg" alt="터치 바 이미지" />
        </StImageWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/7/1/13;
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
`;

const StParagraph = styled.p`
  width: 90%;
  margin-top: 3rem;
  padding: 0rem 4rem;
  color: #a0a0a5;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  & > :first-child {
    color: white;
  }
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const StImage = styled.img`
  width: 100%;
  min-width: 64rem;
`;

export default TouchBar;
