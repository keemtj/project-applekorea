import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionMacBookAir = () => {
  return (
    <StSection>
      <StWrapper>
        <h2>MacBook Air</h2>
        <div>Air의 흐름을 바꾸다.</div>
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
        <StImage src="images/home_macbook_air.jpg" alt="에어팟 맥스" />
      </Link>
    </StSection>
  );
};

/* <row-start> / <column-start> / <row-end> / <column-end> */
const StSection = styled.section`
  grid-area: 2 / 1 / 2 / 1;
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
    font-size: 4rem;
    font-weight: 500;
  }
  & > div {
    margin-top: 1.2rem;
    font-size: 2rem;
    font-weight: 400;
  }
`;

const StMoreInfo = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  z-index: 2;
  top: 25%;
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
  left: -30%;
  bottom: 0;
  height: 100%;
`;

export default SectionMacBookAir;