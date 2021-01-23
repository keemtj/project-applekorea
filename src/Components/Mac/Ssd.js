import React from 'react';
import styled from 'styled-components';

const Ssd = () => {
  return (
    <StSection>
      <StHeader>
        <h3>SSD 저장 장치</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StKeywordWrapper>
            <StKeyword>
              <span>최대</span>
              <div>
                <span>2</span>
                <span>TB</span>
              </div>
              <span>SSD 저장 장치</span>
            </StKeyword>
            <StKeyword>
              <span>최대</span>
              <div>
                <span>3.3</span>
                <span>GB/s</span>
              </div>
              <span>순차 읽기 속도</span>
            </StKeyword>
          </StKeywordWrapper>
        </StContents>
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 7/5/7/9;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background: linear-gradient(to right bottom, #1f224b 0%, #2d5d85 100%);
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
  justify-content: center;
  width: 100%;
  font-size: 2rem;
`;

const StKeywordWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
`;

const StKeyword = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 600;
  & > span:first-child,
  & > span:last-child {
    font-size: 2.2rem;
  }
  & > div {
    & > :first-child {
      font-size: 10rem;
    }
    & > :last-child {
      font-size: 6rem;
      line-height: 1.7;
    }
  }
`;

export default Ssd;
