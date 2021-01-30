import React from 'react';
import styled from 'styled-components';
import useFillColor from '../../Hooks/useFillColor';

const Battery = () => {
  const fillColor = useFillColor(0, 1);

  return (
    <StSection>
      <StHeader>
        <h3>한나절은 너끈한 배터리 성능</h3>
      </StHeader>
      <StContents>
        <StHeadline>
          <StHeadlineInner {...fillColor}>
            <span>Mac 사상 가장 긴</span>
            <span>최대 20시간의</span>
            <span>배터리 사용 시간.</span>
          </StHeadlineInner>
        </StHeadline>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 6/5/6/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: linear-gradient(to bottom, #203025 0%, #151516 100%);
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding: 0rem 4rem;
`;

const StHeadline = styled.div`
  margin-top: -6rem;
  font-size: 8rem;
  font-weight: 800;
  line-height: 1.2;
`;

const StHeadlineInner = styled.p`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export default Battery;
