import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';
import { LogoApple } from '@styled-icons/ionicons-solid/LogoApple';

const SectionWatch = () => {
  return (
    <StSection>
      <Link to="/project-applekorea/watch">
        <StHeadline>
          <h2>
            <StLogoApple />
            Watch
          </h2>
          <p>
            <span>SERIES 6</span>
            <span>건강의 미래, 이미 손목 위에.</span>
          </p>
        </StHeadline>
      </Link>
      <StContents>
        <StLink to="/project-applekorea/watch">
          <span>더 알아보기</span>
          <StChevronRight />
        </StLink>
        <StLink to="/project-applekorea/watch">
          <span>구매하기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/watch">
        <StBackgroundImage
          src="images/home_watch_6.jpg"
          alt="애플 워치 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1 / 1 / 1 / 1;
  background-color: black;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  color: white;

  position: absolute;

  & > h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  & > p {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    & > :first-child {
      margin-top: 1rem;
      color: #bf4903;
      font-size: 1.4rem;
      font-weight: 400;
    }
    & > :last-child {
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: 400;
    }
  }
`;

const StLogoApple = styled(LogoApple)`
  width: 3rem;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 28%;
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
  height: 65%;
  width: 100%;
  object-fit: contain;
  object-position: 50% 100%;

  position: absolute;
  bottom: 0;
`;

export default SectionWatch;
