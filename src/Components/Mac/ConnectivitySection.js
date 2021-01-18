import React from 'react';
import styled from 'styled-components';

const ConnectivitySection = () => {
  return (
    <StSection>
      <StArticle>
        <StHeadline>
          <div>연결성</div>
          <div>그 어느 때보다</div>
          <div>빠르게 통하다.</div>
        </StHeadline>
      </StArticle>
      <StConnectivityWrapper>
        <StConnectivityImage
          src="images/mac_connectivity.jpg"
          alt="연결성 이미지"
        />
      </StConnectivityWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  width: 100%;
  margin-top: 18rem;
  text-align: center;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10rem auto 0rem;
  padding: 0rem 1rem;
  width: 100%;
  max-width: 100rem;
`;

const StHeadline = styled.div`
  font-size: 7.5rem;
  font-weight: 800;
  & :first-child {
    color: #a0a0a5;
    text-align: left;
  }
  & div {
    line-height: 1.2;
  }
`;

const StConnectivityWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StConnectivityImage = styled.img`
  margin-top: 9rem;
  width: 180%;
`;

export default ConnectivitySection;
