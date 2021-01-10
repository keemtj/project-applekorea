import React from 'react';
import styled from 'styled-components';

const SubNavigation = () => {
  return (
    <StSubNav>
      <div>
        <div>KimTaejin Pro 13형</div>
        <StDownloadResume href="/" download="이력서.pdf">
          이력서 다운로드
        </StDownloadResume>
      </div>
    </StSubNav>
  );
};

const StSubNav = styled.nav`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid grey;
  background: linear-gradient(rgba(29, 29, 31, 0.72), rgba(29, 29, 31, 0.72)),
    ${({ theme }) => theme.color.bgRgba};
  backdrop-filter: blur(5px);
  font-size: 2rem;
  font-weight: 600;

  & > div {
    ${displayStyle};
    padding: 1.5rem 19.4rem;
    width: 100%;
    max-width: 140rem;
  }
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

export default SubNavigation;
