import React from 'react';
import styled from 'styled-components';
import useScrollFadeIn from '../../Hooks/useScrollFadeIn';

const MainSection = () => {
  const videoAnimation = useScrollFadeIn();
  const upAnimation = useScrollFadeIn('up');

  return (
    <StSection>
      <StMacBookProVideo
        src="videos/mac_macbook_pro.mp4"
        typeof="video/mp4"
        autoPlay={true}
        {...videoAnimation}
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
      <StArticle2>
        <StHeadline2>
          <span></span>
          <span>M1</span>
          <div>칩 하나에 담은 거대한 도약.</div>
        </StHeadline2>
        <StContent2>
          <span>
            드디어 찾아왔습니다. Mac용으로 Apple에서 직접 디자인한 최초의 칩.
            160억 개라는 엄청난 수의 트랜지스터가 집적되어 있는 Apple M1 시스템
            온 칩(SoC, System on Chip)은 자그마한 칩 하나에 CPU, GPU, Neural
            Engine, I/O 등 수많은 요소가 통합되어 있습니다. 놀라운 성능과 맞춤형
            테크놀로지, 업계 최고 수준의 전력 효율을 자랑하는 M1은 Mac의 성능을
            단지 한 단계 높이는 것이 아니라 완전히 새로운 경지로 끌어올려주죠.
          </span>
        </StContent2>
      </StArticle2>
      <StM1Video src="videos/mac_m1.mp4" typeof="video/mp4" autoPlay={true} />
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

const StArticle2 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10rem auto 0rem;
  padding: 0rem 1rem;
  width: 100%;
  max-width: 100rem;
`;

const StHeadline2 = styled.div`
  text-align: left;
  margin-top: 3rem;
  font-size: 7.5rem;
  font-weight: 800;

  & :first-child {
    color: #a0a0a5;
    font-size: 10.5rem;
  }
  & span:not(:first-child) {
    color: #a0a0a5;
    font-size: 8rem;
    font-weight: 600;
  }
`;

const StContent2 = styled.div`
  margin-top: 3rem;
  width: 74%;
  color: #a0a0a5;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.4;
  word-break: keep-all;
`;

const StM1Video = styled.video`
  width: 100%;
  padding: 0rem 1.5rem;
`;

export default MainSection;
