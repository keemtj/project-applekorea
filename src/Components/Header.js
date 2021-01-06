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
        <h1>KimTaejin Pro 13형</h1>
        <StDownloadResume href="/" download="이력서.pdf">
          이력서 다운로드
        </StDownloadResume>
      </StSubNav>
    </StHeader>
  );
};

const displayStyle = {
  display: 'flex',
  padding: '2rem 19.4rem',
  'align-items': 'center',
  'justify-content': 'space-between',
};

const StHeader = styled.header`
  color: ${({ theme }) => theme.color.white};
`;

const StNav = styled.nav`
  ${displayStyle};
  background: ${({ theme }) => theme.color.black};
  height: 4.4rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: #e1e1e1;
`;

const StSubNav = styled.nav`
  ${displayStyle};
  width: 100%;
  height: 5.2rem;
  border-bottom: 1px solid grey;
  background: linear-gradient(rgba(29, 29, 31, 0.72), rgba(29, 29, 31, 0.72)),
    ${({ theme }) => theme.color.bgRgba};
  backdrop-filter: blur(5px);
  font-size: 2rem;
  font-weight: 600;
`;

const StDownloadResume = styled.a`
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
export default Header;
