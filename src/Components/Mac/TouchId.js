import React from 'react';
import styled from 'styled-components';

const TouchId = () => {
  return (
    <StSection>
      <StHeader>
        <h3>Touch ID</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          <span>
            센서를 터치하면 즉시 Mac이 잠금 해제되고, 살짝 누르면 잠깁니다. 앱을
            구입할 때, 암호화된 문서를 열 때, 시스템 설정에 접근할 때마다 매번
            암호를 새로 입력할 필요 없이 지문으로 간단히 사용자 인증을 할 수
            있죠.
          </span>
        </StParagraph>
        <StImageWrapper>
          <StImageInner>
            <img src="images/mac_unlock_icon.png" alt="잠금 해제 아이콘" />
            <span>Mac 잠금 해제</span>
          </StImageInner>
          <StImageInner>
            <img src="images/mac_appletv_icon.png" alt="App Store 아이콘" />
            <span>App Store 콘텐츠 구매</span>
          </StImageInner>
          <StImageInner>
            <img
              src="images/mac_protected_icon.png"
              alt="암호로 보호된 문서 아이콘"
            />
            <span>암호로 보호된 문서 열기</span>
          </StImageInner>
        </StImageWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 2/1/2/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0), #151b25, #151516),
    linear-gradient(90deg, #172538, #18263a 50%);
  border: none;
  border-radius: 3rem;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;

const StParagraph = styled.p`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: 6rem;
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  padding: 0rem 4rem;
  & > span {
    width: 95%;
  }
`;

const StImageWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 6rem 4rem 0rem;
  & > :nth-child(1) > img {
    width: 30%;
  }
  & > :nth-child(2) > img {
    width: 33%;
  }
  & > :nth-child(3) > img {
    width: 25%;
  }
`;

const StImageInner = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  & > span {
    margin-top: 1.5rem;
    word-break: keep-all;
  }
`;

export default TouchId;
