import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const SectionNewStore = () => {
  return (
    <StSection>
      <Link to="/project-applekorea/newstore">
        <StHeadline>
          <h2>Apple 여의도</h2>
          <p>곧 만나요.</p>
        </StHeadline>
      </Link>
      <StContents>
        <StLink to="/project-applekorea/newstore">
          <span>더 알아보기</span>
          <StChevronRight />
        </StLink>
      </StContents>
      <Link to="/project-applekorea/newstore">
        <StBackgroundImage
          src="images/home_new_store.jpg"
          alt="여의도 스토어 이미지"
        />
      </Link>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 3/1/3/1;
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
  width: 40rem;
  color: black;

  position: absolute;
  z-index: 2;
  top: 5rem;
  left: calc(50% - 20rem);
  right: 50%;

  & > h2 {
    font-size: 4rem;
    font-weight: 500;
  }
  & > p {
    margin-top: 2rem;
    font-size: 2rem;
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
  left: calc(50% - 7.5rem);

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

export default SectionNewStore;
