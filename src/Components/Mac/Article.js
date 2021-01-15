import React from 'react';
import styled from 'styled-components';

const Article = ({ gridArea }) => {
  return (
    <StArticle gridArea={gridArea}>
      <StHeading>CPU</StHeading>
      <StWrapper>
        <div>
          <StHeadline>
            <span>8코어 CPU</span>
            <span>파워 그 자체.</span>
          </StHeadline>
          <StParagraph>
            M1 칩은 MacBook Pro에 엄청나게 빠른 속도와 파워를 선사합니다. 8코어
            CPU가 이전 세대 대비 최대 2.8배 더 빨라진 프로세싱 속도를 뽐내며
            복잡한 워크플로도, 막대한 작업량도 거뜬히 처리해내죠. 게다가 모든
            작업에서 놀랄 만큼 탁월한 에너지 효율성을 발휘한답니다.
          </StParagraph>
          <StButton>M1이 엄청난 속도를 내는 비결 알아보기</StButton>
        </div>
        <StImageWrapper>
          <StImage src="images/image2.png" alt="" />
        </StImageWrapper>
      </StWrapper>
    </StArticle>
  );
};

/* <row-start> / <column-start> / <row-end> / <column-end> */

const StArticle = styled.article`
  grid-area: ${({ gridArea }) => gridArea};
  border: none;
  border-radius: 3rem;
  background: ${({ theme }) => theme.color.linearGradient};
  padding: 4rem 0rem 4rem 4rem;
  display: flex;
  flex-direction: column;
`;

const StHeading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const StWrapper = styled.div`
  display: flex;

  & > :first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 82%;
    height: 100%;
  }
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 10rem;
  font-size: 7.8rem;
  font-weight: bolder;
  line-height: 1.2;

  & > :first-child {
    color: ${({ theme }) => theme.color.purple};
  }
`;

const StParagraph = styled.p`
  width: 47.5rem;
  min-width: 47.5rem;
  margin-top: 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StButton = styled.button`
  /* visibility: hidden; */
  margin-top: 9rem;
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;

export default Article;
