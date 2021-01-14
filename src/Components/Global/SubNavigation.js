import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubNavigation = () => {
  return (
    <StSubNav>
      <StWrapper>
        <h2>MacBook Pro 13형</h2>
        <StLink to="/project-applekorea/bag">구입하기</StLink>
      </StWrapper>
    </StSubNav>
  );
};

const StSubNav = styled.nav`
  position: sticky;
  top: 0rem;

  width: 100%;
  height: 5.5rem;
  border-bottom: 1px solid #3d3d3d;
  background-color: rgba(51, 51, 51, 0.5);
  backdrop-filter: blur(1.5rem);
  color: white;
  font-size: 2rem;
  font-weight: 600;
`;

const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0rem 1rem;
  width: 100%;
  max-width: 100rem;
  height: 100%;
`;

const StLink = styled(Link)`
  display: block;
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.color.blue};
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverBlue};
  }
  &:link {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
  font-size: 1.1rem;
`;

export default SubNavigation;
