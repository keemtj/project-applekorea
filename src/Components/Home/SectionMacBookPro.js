import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionMacBookPro = () => {
  return (
    <StSection>
      <Link to="/project-applekorea/mac">
        <StHeadline>
          <h2>MacBook Pro</h2>
          <div>프로 중의 프로.</div>
          <p>13형 모델</p>
        </StHeadline>
      </Link>
      <StContents>
        <StLink to="/project-applekorea/mac">
          <span>더 알아보기</span>
          <StChevronRight />
        </StLink>
        <StLink to="/project-applekorea/mac">
          <span>구매하기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/mac">
        <StBackgroundImage
          src="images/home_macbook_pro_13.jpg"
          alt="맥북 프로 13형 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 3/2/3/2;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 2;
  top: 5rem;
  left: calc(50% - 20rem);
  right: 50%;

  width: 40rem;
  color: white;

  & > h2 {
    font-size: 4rem;
    font-weight: 500;
  }
  & > div {
    margin-top: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
  }
  & > p {
    margin-top: -9.5rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

const StContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 25%;
  left: calc(50% - 9.5rem);

  width: fit-content;
  & > :last-child {
    margin-left: 3rem;
  }
  font-size: 1.6rem;
`;

const StLink = styled(Link)`
  display: flex;
  color: #0266cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline solid #0266cc 2px;
    text-underline-position: under;
  }
`;

const StChevronRight = styled(ChevronRight)`
  width: 1.8rem;
  color: #0266cc;
`;

const StBackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export default SectionMacBookPro;
