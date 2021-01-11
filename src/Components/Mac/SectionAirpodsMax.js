import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionAirpodsMax = () => {
  return (
    <StSection>
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
        {/* <StBackgroundImage /> */}
        <StImage
          src="project-applekorea/images/home_airpods_max.jpg"
          alt="에어팟 맥스"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1 / 1 / 1 / 1;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StMoreInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  z-index: 2;
  bottom: 5rem;
  left: calc(50% - 11rem);

  width: fit-content;
  & > :last-child {
    margin-left: 3rem;
  }
  font-size: 2rem;
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
  top: 0;
  left: -50%;
  height: 100%;
`;

// const StBackgroundImage = styled.div`
//   background-image: url(${process.env.PUBLIC_URL} + 'project-applekorea/images/home_airpods_max.jpg');
//   background-repeat: no-repeat;
//   background-size: 210%;
//   background-position: center;
//   height: 100%;
// `;

export default SectionAirpodsMax;
