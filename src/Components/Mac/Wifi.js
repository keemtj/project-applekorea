import React from 'react';
import styled from 'styled-components';

const Wifi = () => {
  return (
    <StSection>
      <StHeader>
        <h3>Wi-Fi 6</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          차세대 Wi-Fi는 단순히 속도만 빠른 것이 아닙니다. 같은 네트워크에
          접속하는 기기가 점점 많아져도 MacBook Pro의 성능을 그대로 누릴 수 있게
          해주는 스마트함까지 갖췄죠.
        </StParagraph>
        <StImageWrapper>
          <StImage src="images/mac_wifi_icon.png" alt="와이파이 아이콘" />
          <span>Wi-Fi 6</span>
          <span>최대 1.2Gb/s 처리량</span>
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
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  & > :nth-child(2) {
    margin-top: 3rem;
    font-size: 7.5rem;
    font-weight: 600;
  }
  & > :nth-child(3) {
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const StImage = styled.img`
  width: 40%;
`;

export default Wifi;
