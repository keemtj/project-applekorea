import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LogoApple } from '@styled-icons/ionicons-solid/LogoApple';
import { Search } from '@styled-icons/ionicons-outline/Search';
import { Bag } from '@styled-icons/ionicons-outline/Bag';

const Header = () => {
  const isFixed = false;
  return (
    <StHeader isFixed={isFixed}>
      <StNav>
        <StUl>
          <li>
            <StNavLink
              activeClassName={('active', 'home')}
              to="/project-applekorea/"
              exact
            >
              <h1 hidden={true}>Apple Home</h1>
              <StLogoApple />
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/mac">
              <span>Mac</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/ipad">
              <span>iPad</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/iphone"
            >
              <span>iPhone</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/watch"
            >
              <span>Watch</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/music"
            >
              <span>Music</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink
              activeClassName={'active'}
              to="/project-applekorea/support"
            >
              <span>Support</span>
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/map">
              <span hidden={true}>Search</span>
              <StSearch />
            </StNavLink>
          </li>
          <li>
            <StNavLink activeClassName={'active'} to="/project-applekorea/bag">
              <span hidden={true}>Shopping Bag</span>
              <StBag />
            </StNavLink>
          </li>
        </StUl>
      </StNav>
    </StHeader>
  );
};

const StHeader = styled.header`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1.5rem);
  width: 100%;
  height: 4.4rem;
  ${({ isFixed }) =>
    isFixed &&
    css`
      position: fixed;
    `};
  z-index: 3;
`;

const StNav = styled.nav`
  max-width: 100rem;
  height: 100%;
  margin: 0 auto;
`;

const StUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StNavLink = styled(NavLink)`
  padding: 0rem 1rem;
  color: #d6d6d6;
  font-size: 1.4rem;
  font-weight: 300;
  text-decoration: none;
  letter-spacing: 0.01rem;
  &.home {
    color: #d6d6d6;
  }
  &.active {
    color: #a5a5a5;
  }
  &:not(.active) {
    transition: color 0.3s ease;
    &:hover {
      color: white;
    }
  }
`;

const StLogoApple = styled(LogoApple)`
  width: 2.1rem;
`;
const StSearch = styled(Search)`
  width: 2.15rem;
`;
const StBag = styled(Bag)`
  width: 2.15rem;
`;

export default Header;
