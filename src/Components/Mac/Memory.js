import React from 'react';
import styled from 'styled-components';

const Memory = () => {
  return (
    <StSection>
      <StHeader>
        <h3>통합 메모리</h3>
      </StHeader>
      <StContents>
        <StImage src="images/mac_memory_icon.png" alt="통합 메모리 아이콘" />
        <StParagraph>
          <span>한몸으로 움직이다.</span>
          M1 칩은 최대 16GB의 초고속 통합 메모리를 탑재하고 있습니다. 고대역폭과
          저지연성을 자랑하는 이 통합 메모리는 CPU, GPU 그리고 Neural Engine 간
          데이터를 효율적으로 공유할 수 있게 해줍니다. 덕분에 당신이 하는 모든
          일을 더욱 빠르게 막힘없이 처리할 수 있죠.
        </StParagraph>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 7/1/7/5;
  display: flex;
  flex-flow: column nowrap;
  border: none;
  border-radius: 3rem;
  background: center / cover url(images/mac_memory.jpg) no-repeat;
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding-left: 4.5rem;
`;

const StParagraph = styled.p`
  padding-right: 4.5rem;
  width: 100%;
  margin-top: 3rem;
  color: #a0a0a5;
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.35;
  word-break: keep-all;
  & > span {
    color: white;
  }
`;

const StImage = styled.img`
  width: 5rem;
`;

export default Memory;
