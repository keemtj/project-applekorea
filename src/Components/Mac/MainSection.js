import React from 'react';
import styled from 'styled-components';
import usePlayVideo from '../../Hooks/usePlayVideo';
import useScrollFadeIn from '../../Hooks/useScrollFadeIn';

const MainSection = () => {
  const upAnimation = useScrollFadeIn('up', 0, 0.5);
  const playVideo = usePlayVideo(0);

  return (
    <StSection>
      <StMacBookProVideo
        src="videos/mac_macbook_pro.mp4"
        typeof="video/mp4"
        {...playVideo}
      />
      <StArticle1 {...upAnimation}>
        <StProductName>MacBook Pro</StProductName>
        <StHeadline>프로 중의 프로.</StHeadline>
        <StContent1>
          Apple M1 칩은 13형 MacBook Pro에 믿을 수 없을 만큼의 속도와 파워를
          선사합니다. 최대 2.8배 향상된 CPU 성능, 최대 5배 빨라진 그래픽 속도,
          최대 11배 빨라진 머신 러닝 성능을 구현하는 최첨단 Apple 제작 Neural
          Engine, 여기에 무려 20시간 지속되는 Mac 사상 가장 오래가는 배터리까지.
          외장은 Apple의 가장 사랑받는 프로용 노트북 그대로, 하지만 그 능력은 한
          차원 더 높아졌습니다.
        </StContent1>
      </StArticle1>
    </StSection>
  );
};

const StSection = styled.section`
  width: 100%;
  text-align: center;
`;

const StMacBookProVideo = styled.video`
  width: 100%;
  max-width: 120rem;
  margin-top: 6rem;
`;

const StArticle1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0rem 1rem;
  width: 100%;
  max-width: 100rem;
`;

const StProductName = styled.div`
  z-index: 0;
  margin-top: -11rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const StHeadline = styled.div`
  z-index: 0;
  margin-top: 3rem;
  font-size: 9rem;
  font-weight: 800;
  background: linear-gradient(${({ theme }) => theme.color.white}, #a0a0a5 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StContent1 = styled.div`
  margin: 3rem auto;
  width: 100%;
  color: #a0a0a5;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
`;

export default MainSection;
