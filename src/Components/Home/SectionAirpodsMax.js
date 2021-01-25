import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionAirpodsMax = () => {
  return (
    <StSection>
      <StContents>
        <StLink to="/project-applekorea/music">
          <span>더 알아보기</span>
          <StChevronRight />
        </StLink>
        <StLink to="/project-applekorea/music">
          <span>구매하기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/music">
        <StBackgroundImage
          src="images/home_airpods_max.jpg"
          alt="에어팟 맥스 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/1/1/1;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const StContents = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  position: absolute;
  top: 90%;
  left: calc(50% - 11rem);
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

export default SectionAirpodsMax;
