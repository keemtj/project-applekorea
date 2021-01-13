import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionNewSeason = () => {
  return (
    <StSection>
      <StWrapper>
        <h2>대학 생활용 Mac 또는 iPad 구입하고 AirPods까지 덤으로.</h2>
      </StWrapper>
      <StMoreInfo>
        <StList>
          <StLink to="/project-applekorea/mac">쇼핑하기</StLink>
          <StChevronRight />
        </StList>
      </StMoreInfo>
      <Link to="/project-applekorea/mac">
        <StImage src="images/home_new_season.jpg" alt="에어팟 맥스" />
      </Link>
    </StSection>
  );
};

/* <row-start> / <column-start> / <row-end> / <column-end> */
const StSection = styled.section`
  grid-area: 2 / 2 / 2 / 2;
  background-color: #f1f1f3;
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

  width: 42rem;

  & > h2 {
    font-size: 3.5rem;
    font-weight: 600;
    text-align: center;
    word-break: keep-all;
  }
`;

const StMoreInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  z-index: 2;
  top: 23%;
  left: calc(50% - 4.5rem);

  width: fit-content;
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
  bottom: 0;
  width: 100%;
`;

export default SectionNewSeason;
