import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <StNav>
        <a>Home</a>
        <a>Main</a>
        <a>Project</a>
        <a>About</a>
      </StNav>
      <StSubNav>
        <h1>KimTaejin Pro</h1>
        <StDownloadButton>
          <StDownloadResume href="/" download="이력서.pdf">
            구입하기
          </StDownloadResume>
        </StDownloadButton>
      </StSubNav>
    </StHeader>
  );
};

const displayStyle = {
  display: 'flex',
  padding: '1rem 10rem',
  'align-items': 'center',
  'justify-content': 'space-between',
};

const StHeader = styled.header`
  color: ${({ theme }) => theme.color.white};
`;

const StNav = styled.nav`
  ${displayStyle};
  background: ${({ theme }) => theme.color.black};
`;

const StSubNav = styled.nav`
  position: fixed;
  z-index: 2;
  ${displayStyle};
  padding: 2rem 10rem;
  width: 100%;
  background-color: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    ${({ theme }) => theme.color.bgRgba};
  background-color: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  backdrop-filter: blur(10px);
`;

const StDownloadButton = styled.button`
  border: none;
  border-radius: 1.2rem;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => theme.color.blue};
  &:hover {
    background-color: ${({ theme }) => theme.color.hoverBlue};
  }
`;

const StDownloadResume = styled.a`
  display: block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  &:link {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
  &:visited {
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
  }
`;
export default Header;
