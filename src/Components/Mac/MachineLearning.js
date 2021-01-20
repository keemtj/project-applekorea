import React from 'react';
import styled from 'styled-components';

const MachineLearning = () => {
  return (
    <StSection>
      <StHeader>
        <h3>머신 러닝</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StParagraph>
            <span>16코어 Neural Engine. 스마트함과 스피드의 만남.</span>
            <span>
              머신 러닝(ML)은 동영상 분석, 음성 인식, 이미지 프로세싱 등 다양한
              작업에 어마어마한 처리 속도와 자동화 기능을 더해줍니다. 16코어
              Neural Engine 및 관련 기술이 총망라된 M1 칩이 MacBook Pro의 ML
              성능을 최고 수준으로 끌어올리죠.
            </span>
          </StParagraph>
          <StKeywordWrapper>
            <StKeyword>
              <div>
                <span>16</span>
                <span>코어</span>
              </div>
              <span>Neural Engine</span>
            </StKeyword>
            <StKeyword>
              <span>최대</span>
              <div>
                <span>11</span>
                <span>배</span>
              </div>
              <span>더 빠른 ML 성능</span>
            </StKeyword>
          </StKeywordWrapper>
          <StButton>
            <StModalTrigger>
              M1이 ML 성능을 높여주는 비결 알아보기
            </StModalTrigger>
          </StButton>
        </StContents>
        <StImage src="images/mac_ml.png" alt="CPU 이미지" />
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 3/1/3/13;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background: linear-gradient(to bottom, #4c102a 0%, #151516 100%);
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
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  padding-left: 4.5rem;
`;

const StParagraph = styled.p`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 6rem;
  padding-right: 4.5rem;
  width: 100%;
  color: #a0a0a5;
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
  & :first-child {
    color: white;
  }
`;

const StKeywordWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-end;
  margin-top: -3rem;
  padding-right: 4.5rem;
  width: 100%;
`;

const StKeyword = styled.div`
  padding-right: 4.5rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  & > span:first-child,
  & > span:last-child {
    font-size: 1.7rem;
  }
  & > div {
    & > :first-child {
      font-size: 9rem;
    }
    & > :last-child {
      font-size: 6rem;
      line-height: 1.5;
    }
  }
`;

const StButton = styled.div`
  padding: 0rem 0rem 4.5rem 0rem;
`;

const StModalTrigger = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const StImage = styled.img`
  width: 100%;
  max-width: 50%;
  object-fit: cover;
  object-position: -6rem;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

export default MachineLearning;
