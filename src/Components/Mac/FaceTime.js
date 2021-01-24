import React from 'react';
import styled from 'styled-components';

const AppCollection = () => {
  return (
    <StSection>
      <StHeader>
        <h3>FaceTime HD 카메라</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          M1 칩은 영상 통화 시 당신의 모습을 최고의 상태로 보여주는 일에도
          일조합니다. 저조도에서도 명부가 그 어느 때보다 선명하게 살아나고, 첨단
          노이즈 감소 기능으로 암부의 디테일도 더욱 또렷하게 보이죠. 얼굴 인식
          기능이 Neural Engine을 활용해 화이트 밸런스 및 노출 레벨을 더욱 잘
          조절하기 때문에 피부 톤도 훨씬 자연스럽답니다.
        </StParagraph>
        <StImageWrapper>
          <StImage src="images/mac_facetime3.png" alt="페이스 타임 이미지" />
        </StImageWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/1/1/8;
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
  width: 85%;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StImage = styled.img`
  width: 100%;
`;

export default AppCollection;
