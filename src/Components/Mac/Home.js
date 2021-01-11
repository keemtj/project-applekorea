import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/entypo/ChevronRight';

const Home = () => {
  return (
    <StMain>
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
          <StBackgroundImage />
        </Link>
      </StSection>
    </StMain>
  );
};

const StMain = styled.main`
  padding-top: 4.4rem;
`;

const StSection = styled.section`
  width: 100%;
  height: 70rem;
  position: relative;
`;

const StMoreInfo = styled.ul`
  position: absolute;
  bottom: 5rem;
  left: calc(50% - 11.6rem);
  width: 23.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

const StBackgroundImage = styled.div`
  background-image: url(project-applekorea/images/home_airpods_max.jpg);
  background-repeat: no-repeat;
  background-size: 210%;
  background-position: center;
  height: 100%;
`;

export default Home;
