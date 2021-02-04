import React from 'react';
import styled from 'styled-components';

const ModalSubContents = props => {
  console.log(props);
  const value = 1.8;
  const isActive = true;
  return (
    <StContent>
      <StHr />
      <StMenu>
        <li>
          <StItem isActive={isActive}>Xcode</StItem>
          <StSlash>/</StSlash>
        </li>
        <li>
          <StItem>Final Cut Pro</StItem>
          <StSlash>/</StSlash>
        </li>
        <li>
          <StItem>Affinity Photo</StItem>
          <StSlash>/</StSlash>
        </li>
        <li>
          <StItem>Logic Pro</StItem>
        </li>
      </StMenu>
      <StGroup>
        <StBuildWrapper>
          <StBuild isActive={isActive}>
            <StBar isActive={isActive} />
            <StCaption>Apple M1 칩 탑채 13형 MacBook Pro</StCaption>
          </StBuild>
          <StBuild>
            <StBar value={value} />
            <StCaption>이전 세대 13형 MacBook Pro(기준치)</StCaption>
          </StBuild>
        </StBuildWrapper>
        <StValue>
          {`${value.toFixed(1)}`}
          <span>배</span>
          <StValueCaption>더 많은 Amp Designer 플러그인</StValueCaption>
        </StValue>
      </StGroup>
    </StContent>
  );
};

const StContent = styled.div`
  margin: 3rem 0rem;
  color: #a1a1a6;
  font-size: 1.8rem;
  line-height: 1.5;
`;

const StHr = styled.hr`
  border: none;
  border-bottom: 1px solid #424245;
  margin: 6rem 0rem;
`;

const StMenu = styled.ul`
  display: flex;
  padding-bottom: 4.5rem;
  font-size: 2.4rem;
`;

const StItem = styled.span`
  color: ${({ isActive }) => isActive && '#a93ad8'};
  cursor: pointer;
`;

const StSlash = styled.span`
  padding: 0rem 1rem;
  color: #a1a1a6;
`;

const StGroup = styled.div`
  display: flex;
`;

const StBuildWrapper = styled.div`
  flex-grow: 1;
  margin-right: 4.5rem;
`;

const StBuild = styled.div`
  padding-bottom: ${({ isActive }) => isActive && '4.5rem'};
  color: ${({ isActive }) => isActive && '#a93ad8'};
`;

const StCaption = styled.div``;

const StValue = styled.div`
  margin-top: -1rem;
  color: #a93ad8;
  font-size: 8rem;
  font-weight: 600;
  line-height: 1;
  & > span {
    font-size: 6rem;
  }
`;

const StValueCaption = styled.div`
  font-size: 1.8rem;
  line-height: 1.5;
  text-indent: 0.3rem;
`;

const StBar = styled.div`
  border: none;
  border-radius: 2rem;
  background-color: ${({ isActive }) => (isActive ? '#a93ad8' : '#a1a1a6')};
  height: 1rem;
  width: ${({ isActive, value }) => (isActive ? 100 : 100 / value)}%;
`;

export default ModalSubContents;
