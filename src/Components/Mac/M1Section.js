import React from 'react';
import styled from 'styled-components';
import usePlayVideo from '../../Hooks/usePlayVideo';

const M1Section = () => {
  const playVideo = usePlayVideo(0.2);

  return (
    <StSection>
      <StArticle>
        <StHeadline>
          <span></span>
          <span>M1</span>
          <div>칩 하나에 담은 거대한 도약.</div>
        </StHeadline>
        <StContents>
          <span>
            드디어 찾아왔습니다. Mac용으로 Apple에서 직접 디자인한 최초의 칩.
            160억 개라는 엄청난 수의 트랜지스터가 집적되어 있는 Apple M1 시스템
            온 칩(SoC, System on Chip)은 자그마한 칩 하나에 CPU, GPU, Neural
            Engine, I/O 등 수많은 요소가 통합되어 있습니다. 놀라운 성능과 맞춤형
            테크놀로지, 업계 최고 수준의 전력 효율을 자랑하는 M1은 Mac의 성능을
            단지 한 단계 높이는 것이 아니라 완전히 새로운 경지로 끌어올려주죠.
          </span>
        </StContents>
      </StArticle>
      <StM1Video src="videos/mac_m1.mp4" typeof="video/mp4" {...playVideo} />
    </StSection>
  );
};

const StSection = styled.section`
  width: 100%;
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

const StContents = styled.div`
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

export default M1Section;
