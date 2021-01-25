import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionIphone12Pro = () => {
  return (
    <StSection>
      <Link to="/project-applekorea/iphone">
        <StHeadline>
          <h2>iPhone 12 Pro</h2>
          <p>
            <span>도약의 시간.</span>
            <span>가격은 ₩1,350,000부터(보상 판매* 미적용)</span>
          </p>
        </StHeadline>
      </Link>
      <StContents>
        <StLink to="/project-applekorea/iphone">
          <span>더 알아보기</span>
          <StChevronRight />
        </StLink>
        <StLink to="/project-applekorea/iphone">
          <span>구매하기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/iphone">
        <StBackgroundImage
          src="images/home_iphone_12pro.jpg"
          alt="아이폰12 프로 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 3/1/3/1;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;

  position: absolute;
  z-index: 2;
  top: 10%;
  left: calc(50% - 20rem);
  color: white;

  & > h2 {
    font-size: 5.5rem;
    font-weight: 500;
  }
  & > p {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    & > :first-child {
      margin-top: 2rem;
      font-size: 2.5rem;
    }
    & > :last-child {
      margin-top: 2rem;
      color: #86868b;
      font-size: 1.6rem;
    }
  }
`;

const StContents = styled.div`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  position: absolute;
  top: 34%;
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

export default SectionIphone12Pro;
