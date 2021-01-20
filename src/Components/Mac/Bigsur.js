import React from 'react';
import styled from 'styled-components';

const Bigsur = () => {
  return (
    <StSection>
      <StHeader>
        <h3>macOS Big Sur</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StHeadline>
            <span>M1에서 빛나는</span>
            <span>macOS Big Sur의</span>
            <span>강력함.</span>
          </StHeadline>
          <StParagraph>
            M1 칩의 잠재력을 끌어내도록 개발된 macOS Big Sur가 Mac에 대대적인
            성능 향상을 비롯한 다양한 혜택을 선사합니다. 강력하게 업데이트된 앱,
            아름다운 새 디자인, 업계를 선도하는 개인 정보 보호 기능과 동급
            최고의 보안성까지. Apple의 최첨단 하드웨어에서 실행되는 최강의
            소프트웨어죠.
          </StParagraph>
          <StButton>
            <StModalTrigger>
              M1이 그래픽 성능을 높여주는 비결 알아보기
            </StModalTrigger>
          </StButton>
        </StContents>
        <StImage src="images/mac_bigsur.png" alt="CPU 이미지" />
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 4/1/4/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: center / cover url(images/mac_bigsur_bg.jpg) no-repeat;
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
  flex-flow: row nowrap;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-width: 55rem;
  font-size: 2rem;
  padding-left: 4.5rem;
  padding-right: 4.5rem;
`;

const StHeadline = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  font-weight: bolder;
  line-height: 1.2;
`;

const StParagraph = styled.p`
  width: 100%;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StButton = styled.div`
  display: none;
  padding: 0rem 0rem 4.5rem 0rem;
`;

const StModalTrigger = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const StImage = styled.img`
  width: 100%;
  min-width: 55%;
  object-fit: cover;
  object-position: 1.5rem;
  padding-bottom: 3rem;
`;

export default Bigsur;
