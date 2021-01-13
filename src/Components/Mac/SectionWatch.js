import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';
import { LogoApple } from '@styled-icons/ionicons-solid/LogoApple';

const SectionWatch = () => {
  return (
    <StSection>
      <StWrapper>
        <h2>
          <StLogoApple />
          WATCH
        </h2>
        <p>SERIES 6</p>
        <div>건강의 미래, 이미 손목 위에.</div>
      </StWrapper>
      <StMoreInfo>
        <StList>
          <StLink to="/project-applekorea/mac">더 알아보기</StLink>
          <StChevronRight />
        </StList>
        <StList>
          <StLink to="/project-applekorea/mac">구입하기</StLink>
          <StChevronRight />
        </StList>
      </StMoreInfo>
      <Link to="/project-applekorea/mac">
        <StImage src="images/home_watch_6.jpg" alt="에어팟 맥스" />
      </Link>
    </StSection>
  );
};

/* <row-start> / <column-start> / <row-end> / <column-end> */
const StSection = styled.section`
  grid-area: 1 / 1 / 1 / 1;
  background-color: black;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StWrapper = styled.div`
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
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    font-size: 3rem;
    font-weight: 500;
  }
  & > div {
    margin-top: 1.5rem;
    font-size: 2rem;
    font-weight: 400;
  }
  & > p {
    margin-top: 1rem;
    color: #bf4903;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const StLogoApple = styled(LogoApple)`
  width: 3rem;
`;

const StMoreInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  z-index: 2;
  top: 26%;
  left: calc(50% - 9.5rem);

  width: fit-content;
  & > :last-child {
    margin-left: 3rem;
  }
  font-size: 1.6rem;
`;

const StList = styled.li`
  display: flex;
`;

const StLink = styled(Link)`
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

const StImage = styled.img`
  position: absolute;
  z-index: 1;
  left: calc(50% - 13rem);
  right: 50%;
  bottom: 0;
  height: 65%;
`;

export default SectionWatch;
