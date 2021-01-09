import React from 'react';
import styled from 'styled-components';
import MainSection from './MainSection';
import Articles from './Articles';

const Main = () => {
  return (
    <StMain>
      <MainSection />
      <Articles />
      {/* <StSection>
        <h2>Retina 디스플레이 모든 것을 아름답게.</h2>
        <p>
          선명한 Retina 디스플레이가 이미지에 놀라운 수준의 디테일과 사실감을
          더합니다. 텍스트가 또렷하고 선명하게 보입니다. 밝은 LED 백라이트는
          짙은 블랙과 밝은 화이트를 구현하고, P3의 넓은 색영역이 sRGB에서보다
          강렬한 그린과 레드를 표현합니다. 게다가 모든 MacBook Pro에 탑재된 True
          Tone 기술이 주변 조명의 색온도에 맞게 자동으로 화이트 밸런스를 조절해
          시각적으로 훨씬 자연스러운 화면을 구현해주죠.
          <img src="images/image5.jpg" />
          <img src="images/image6.jpg" />
        </p>
      </StSection>
      <StArticle>
        <h2>카메라 및 마이크 제대로 보여주고. 제대로 들려주고.</h2>
        <p>
          M1 덕분에 이제 FaceTime HD 카메라가 최신 이미지 신호 프로세서의 능력을
          온전히 활용할 수 있게 되었습니다. 화상 회의의 이미지 품질을
          향상시켜주는 것은 물론 영상 속 명부와 암부 디테일도 더욱 선명하게
          보여주죠. 또한 온라인 회의를 할 때도, 팟캐스트 방송을 할 때도, 친구 및
          가족들과 통화할 때도 새로운 스튜디오급 마이크가 모두에게 당신의
          목소리를 더욱 크고 선명하게 전달합니다.
          <img src="images/image7.jpg" />
          <img src="images/image8.png" />
        </p>
      </StArticle>
      <StArticle>
        <h2>FaceTime HD 카메라</h2>
        <p>
          M1 칩은 영상 통화 시 당신의 모습을 최고의 상태로 보여주는 일에도
          일조합니다. 저조도에서도 명부가 그 어느 때보다 선명하게 살아나고, 첨단
          노이즈 감소 기능으로 암부의 디테일도 더욱 또렷하게 보이죠. 얼굴 인식
          기능이 Neural Engine을 활용해 화이트 밸런스 및 노출 레벨을 더욱 잘
          조절하기 때문에 피부 톤도 훨씬 자연스럽답니다.
          <img src="images/image9.png" />
        </p>
      </StArticle>
      <StArticle>
        <h2>3 마이크 어레이</h2>
        <p>
          스튜디오 없이도 스튜디오급 퀄리티. 프로급 마이크에 견줄 만큼 향상된
          신호 대 잡음비.
          <StVideo src="videos/video2.mp4" typeof="video/mp4" autoPlay={true} />
        </p>
      </StArticle>
      <StArticle>
        <h2>연결성 그 어느 때보다 빠르게 통하다.</h2>
        <p>
          <img src="images/image10.jpg" />
        </p>
      </StArticle> */}
    </StMain>
  );
};

const StMain = styled.main`
  width: 100%;
  max-width: 146rem;
  margin: 0 auto;
  color: white;
`;

export default Main;
