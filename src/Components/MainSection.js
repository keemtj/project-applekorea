import React from 'react';
import styled from 'styled-components';

const MainSection = () => {
  return (
    <>
      <StVideo src="videos/video.mp4" typeof="video/mp4" autoPlay={true} />
      <StSection>
        {/* <StImg src="images/image.jpg" /> */}
        <StH1>KimTaejin Pro</StH1>
        <StHeading1>프로 중의 프로.</StHeading1>
        <StParagraph1>
          Apple M1 칩은 13형 MacBook Pro에 믿을 수 없을 만큼의 속도와 파워를
          선사합니다. 최대 2.8배 향상된 CPU 성능, 최대 5배 빨라진 그래픽 속도,
          최대 11배 빨라진 머신 러닝 성능을 구현하는 최첨단 Apple 제작 Neural
          Engine, 여기에 무려 20시간 지속되는 Mac 사상 가장 오래가는 배터리까지.
          외장은 Apple의 가장 사랑받는 프로용 노트북 그대로, 하지만 그 능력은 한
          차원 더 높아졌습니다.
        </StParagraph1>
      </StSection>
      <StSection2>
        <StHeading2 style={{ color: 'grey' }}>
          <span style={{ fontSize: '9.5rem' }}></span>M1
        </StHeading2>
        <StHeading2>칩 하나에 담은 거대한 도약.</StHeading2>
        <StParagraph2>
          <span>
            드디어 찾아왔습니다. Mac용으로 Apple에서 직접 디자인한 최초의 칩.
          </span>
          <span>
            160억 개라는 엄청난 수의 트랜지스터가 집적되어 있는 Apple M1 시스템
            온 칩(SoC, System on Chip)은 자그마한 칩 하나에 CPU, GPU, Neural
            Engine, I/O 등 수많은 요소가 통합되어 있습니다. 놀라운 성능과 맞춤형
            테크놀로지, 업계 최고 수준의 전력 효율을 자랑하는 M1은 Mac의 성능을
            단지 한 단계 높이는 것이 아니라 완전히 새로운 경지로 끌어올려주죠.
          </span>
        </StParagraph2>
      </StSection2>
    </>
  );
};

const StVideo = styled.video`
  width: 100%;
  margin-top: 6rem;
  padding: 0rem 10rem;
`;

const StSection = styled.section`
  margin: 0rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StH1 = styled.h1`
  z-index: 0;
  margin-top: -12rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const StHeading1 = styled.h2`
  z-index: 0;
  margin-top: 3rem;
  font-size: 9rem;
  font-weight: 800;
  background: linear-gradient(${({ theme }) => theme.color.white}, grey);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StParagraph1 = styled.p`
  margin-top: 3rem;
  width: 88.75rem;
  color: grey;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
`;

const StSection2 = styled.section`
  margin: 0rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StHeading2 = styled.h2`
  text-align: left;
  margin-top: 3rem;
  font-size: 9rem;
  font-weight: 800;
`;

const StParagraph2 = styled.p`
  margin-top: 3rem;
  width: 88.75rem;
  color: grey;
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.5;
  word-break: keep-all;
`;

export default MainSection;
