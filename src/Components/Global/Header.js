import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <nav>
        <StUl>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea"
              exact
            >
              
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/mac">
              Mac
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/ipad">
              iPad
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/iphone"
            >
              iPhone
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/watch"
            >
              Watch
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/music"
            >
              Music
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/support"
            >
              Support
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/support"
            >
              Support
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/bag">
              Shop
            </StNavLink>
          </li>
        </StUl>
      </nav>
    </StHeader>
  );
};

const StHeader = styled.header`
  background: #333333;
  height: 4.4rem;
`;

const StUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: 100rem; */
  /* height: 100%; */
  /* margin: 0 auto; */
  font-weight: 300;
  /* overflow: hidden; */
`;

const StNavLink = styled(NavLink)`
  padding: 0rem 1rem;
  color: #d6d6d6;
  font-size: 1.4rem;
  text-decoration: none;
  &:first-child {
    font-size: 2.3rem;
    vertical-align: text-top;
  }
  &.active:not(:first-child) {
    opacity: 0.8;
  }
  &:not(.active) {
    transition: color 0.3s ease;
    &:hover {
      color: white;
    }
  }
`;

export default Header;
