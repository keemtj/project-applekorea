import React from 'react';
import styled from 'styled-components';

const Thunderbolt = () => {
  return (
    <StSection>
      <StHeader>
        <h3>Thunderbolt/USB 4</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          초고대역폭과 엄청난 범용성의 만남. Thunderbolt 포트 하나로도 데이터
          전송, 충전, 화면 출력까지 모두 해결할 수 있습니다. MacBook Pro는 이
          Thunderbolt 포트를 두 개나 가지고 있죠.
        </StParagraph>
        <StImageWrapper>
          <StImageInner>
            <img src="images/mac_charging_icon.png" alt="충전 아이콘" />
            <span>충전</span>
          </StImageInner>
          <StImageInner>
            <img
              src="images/mac_display_icon.png"
              alt="외장 디스플레이 아이콘"
            />
            <span>외장 디스플레이</span>
          </StImageInner>
          <StImageInner>
            <img src="images/mac_transfer_icon.png" alt="데이터 전송 아이콘" />
            <span>최대 40Gb/s로 데이터 전송</span>
          </StImageInner>
          <StImageInner>
            <img src="images/mac_connect_icon.png" alt="기기 연결 아이콘" />
            <span>기기 연결</span>
          </StImageInner>
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
  background: linear-gradient(-217deg, #621e8f 16%, #762ca6 56%, #cf6e88 99%);
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
  flex-flow: row wrap;
  padding: 0rem 4rem;
`;

const StImageInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  & > img {
    width: 25%;
  }
  & > span {
    margin-top: 1.5rem;
    font-weight: 600;
    word-break: keep-all;
  }
`;

export default Thunderbolt;
