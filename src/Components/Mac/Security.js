import React from 'react';
import styled from 'styled-components';

const Security = () => {
  return (
    <StSection>
      <StHeader>
        <h3>보안</h3>
      </StHeader>
      <StContentsWrapper>
        <StContents>
          <StImageWrapper>
            <StImage />
          </StImageWrapper>
          <StHeadline>
            <span>MacBook Pro.</span>
            <span>개인 정보는</span>
            <span>철저하게.</span>
          </StHeadline>
        </StContents>
        <StButton>
          <StModalTrigger>
            M1이 개인 정보를 보호하는 비결 알아보기
          </StModalTrigger>
        </StButton>
      </StContentsWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 7/9/7/13;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background: #151516;
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
`;

const StHeadline = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
  color: #a0a0a5;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.3;
`;

const StButton = styled.div`
  padding: 0rem 0rem 4.5rem 0rem;
  margin: 0 auto;
`;

const StModalTrigger = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const StImageWrapper = styled.div`
  margin: 0rem auto;
  width: 10rem;
  height: 12.8rem;
`;

const StImage = styled.div`
  height: 100%;
  background-image: url(images/mac_security.png);
  background-repeat: no-repeat;
  /* position: 14.3%(100/7) 12.5(100/8)*/
  background-position: 0% 0%;
  background-size: 80rem 115.2rem;
`;

export default Security;
