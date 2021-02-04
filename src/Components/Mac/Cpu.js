import React from 'react';
import styled from 'styled-components';
import Modal from '../Global/Modal';

const Cpu = () => {
  const [modalState, setModalState] = React.useState(false);
  const onModal = () => {
    setModalState(!modalState);
  };
  return (
    <StSection>
      <StHeader>
        <h3>CPU</h3>
      </StHeader>
      <StContents>
        <StHeadline>
          <span>8코어 CPU</span>
          <span>파워 그자체.</span>
        </StHeadline>
        <StParagraph>
          M1 칩은 MacBook Pro에 엄청나게 빠른 속도와 파워를 선사합니다. 8코어
          CPU가 이전 세대 대비 최대 2.8 배 더 빨라진 프로세싱 속도를 뽐내며
          복잡한 워크플로도,막대한 작업량도 거뜬히 처리해내죠.게다가 모든
          작업에서 놀랄 만큼 탁월한 에너지 효율성을 발휘한답니다.
        </StParagraph>
      </StContents>
      <StButton>
        <StModalTrigger onClick={onModal}>
          M1이 그래픽 성능을 높여주는 비결 알아보기
        </StModalTrigger>
        {modalState && (
          <Modal modalState={modalState} setModalState={setModalState} />
        )}
      </StButton>
      <StImage src="images/mac_cpu.png" alt="CPU 이미지" />
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 1/1/1/13;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: ${({ theme }) => theme.color.linearGradient};
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 4.5rem;
  width: 45%;
  min-width: 55rem;
  font-size: 2rem;
`;

const StHeadline = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 7.5rem;
  font-weight: bolder;
  line-height: 1.2;

  & > :first-child {
    color: ${({ theme }) => theme.color.purple};
  }
`;

const StParagraph = styled.p`
  margin-top: 3rem;
  width: 49.5rem;
  font-size: 1.9rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StButton = styled.div`
  padding: 0rem 0rem 4.5rem 4.5rem;
`;

const StModalTrigger = styled.button`
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`;

const StImage = styled.img`
  width: 55%;
  min-width: 73rem;
  margin-top: 7.5rem;
`;

export default Cpu;
