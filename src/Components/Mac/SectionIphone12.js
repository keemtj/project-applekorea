import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionIphone12 = () => {
  return (
    <StSection>
      <StWrapper>
        <h2>iPhone 12</h2>
        <div>스피드 그 이상의 스피드.</div>
        <p>가격은 ₩950,000부터(보상 판매* 미적용)</p>
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
        <StImage
          src="project-applekorea/images/home_iphone_12.jpg"
          alt="에어팟 맥스"
        />
      </Link>
    </StSection>
  );
};

/* <row-start> / <column-start> / <row-end> / <column-end> */
const StSection = styled.section`
  grid-area: 2 / 1 / 2 / 1;
  width: 100%;
  height: 70rem;
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
  top: 7rem;
  left: calc(50% - 20rem);
  right: 50%;

  width: 40rem;

  & > h2 {
    font-size: 5.5rem;
    font-weight: 500;
  }
  & > div {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 400;
  }
  & > p {
    margin-top: 2.5rem;
    color: #86868b;
    font-size: 1.6rem;
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
  top: 35%;
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

export default SectionIphone12;
