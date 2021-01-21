import React from 'react';
import styled from 'styled-components';

const Speed = () => {
  return (
    <StSection>
      <StHeader>
        <h3>속도 및 반응성</h3>
      </StHeader>
      <StContents>
        <StHeadline>
          <span>켜는 즉시</span>
          <span>강력하고</span>
          <span>빠릿하게.</span>
        </StHeadline>
        <StParagraph>
          M1 칩과 macOS Big Sur가 만나 시스템 전체가 더욱 빠릿빠릿하게
          돌아갑니다. MacBook Pro를 잠에서 깨우면 즉시 깨어나고, 사진을
          넘겨보거나 Safari에서 웹서핑을 하는 등 일상적인 작업도 더욱 빠르게
          실행되죠. 물론 가장 사용량이 많은 앱들도 이 강력한 파워에 힘입어 아주
          매끄럽게 구동된답니다.
        </StParagraph>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 5/1/5/7;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: center / cover url(images/mac_speed_bg.jpg) no-repeat;
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding: 0rem 4rem;
`;

const StHeadline = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 7rem;
  font-weight: bolder;
  line-height: 1.2;
  & :nth-child(2) {
    text-indent: -2rem;
  }
`;

const StParagraph = styled.p`
  width: 100%;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

export default Speed;
