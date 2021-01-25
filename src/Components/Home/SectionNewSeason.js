import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionNewSeason = () => {
  return (
    <StSection>
      <Link to="/project-applekorea/bag">
        <StHeadline>
          <h2>대학 생활용 Mac 또는 iPad 구입하고 AirPods까지 덤으로.</h2>
        </StHeadline>
      </Link>
      <StContents>
        <StLink to="/project-applekorea/bag">
          <span>쇼핑하기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/bag">
        <StBackgroundImage
          src="images/home_new_season.jpg"
          alt="새학기 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 2/2/2/2;
  background-color: #f1f1f3;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 42rem;
  color: black;

  position: absolute;
  z-index: 2;
  top: 5rem;
  left: calc(50% - 20rem);
  right: 50%;

  & > h2 {
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    word-break: keep-all;
  }
`;

const StContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 23%;
  left: calc(50% - 3rem);

  width: fit-content;
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
  object-fit: contain;
  object-position: 50% 100%;
`;

export default SectionNewSeason;
