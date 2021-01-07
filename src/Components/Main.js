import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <StDiv>
      <StVideo src="videos/video.mp4" typeof="video/mp4" autoPlay={true} />
      {/* <StImg src="images/image.jpg" /> */}
      <div>KimTaejin Pro</div>
      <h2>프로 중의 프로.</h2>
      <p>
        Apple M1 칩은 13형 MacBook Pro에 믿을 수 없을 만큼의 속도와 파워를
        선사합니다. 최대 2.8배 향상된 CPU 성능, 최대 5배 빨라진 그래픽 속도,
        최대 11배 빨라진 머신 러닝 성능을 구현하는 최첨단 Apple 제작 Neural
        Engine, 여기에 무려 20시간 지속되는 Mac 사상 가장 오래가는 배터리까지.
        외장은 Apple의 가장 사랑받는 프로용 노트북 그대로, 하지만 그 능력은 한
        차원 더 높아졌습니다.
      </p>
      <h2>칩 하나에 담은 거대한 도약.</h2>
      <p>
        드디어 찾아왔습니다. Mac용으로 Apple에서 직접 디자인한 최초의 칩. 160억
        개라는 엄청난 수의 트랜지스터가 집적되어 있는 Apple M1 시스템 온 칩(SoC,
        System on Chip)은 자그마한 칩 하나에 CPU, GPU, Neural Engine, I/O 등
        수많은 요소가 통합되어 있습니다. 놀라운 성능과 맞춤형 테크놀로지, 업계
        최고 수준의 전력 효율을1 자랑하는 M1은 Mac의 성능을 단지 한 단계 높이는
        것이 아니라 완전히 새로운 경지로 끌어올려주죠.
      </p>
      <h2>CPU</h2>
      <p>
        8코어 CPU 파워 그 자체. M1 칩은 MacBook Pro에 엄청나게 빠른 속도와
        파워를 선사합니다. 8코어 CPU가 이전 세대 대비 최대 2.8배 더 빨라진
        프로세싱 속도를 뽐내며 복잡한 워크플로도, 막대한 작업량도 거뜬히
        처리해내죠.2 게다가 모든 작업에서 놀랄 만큼 탁월한 에너지 효율성을
        발휘한답니다.
        <img src="images/image2.png" />
      </p>
      <h2>GPU</h2>
      <p>
        8코어 GPU 아름다움을 완성하는 야수성. M1에 탑재된 8코어 GPU는 Apple이
        제작한 그래픽 프로세서 중 단연코 가장 앞선 성능을 자랑합니다. 세상에서
        가장 빠른 PC용 통합 그래픽을 제공하는7 이 칩은 무려 5배나 빨라진 말도 안
        되는 스피드의 그래픽 성능을 보여주죠.
        <div>최대 5배 더 빠른 그래픽 성능</div>
      </p>
      <h2>macOS Big Sur</h2>
      <p>
        M1에서 빛나는 macOS Big Sur의 강력함. M1 칩의 잠재력을 끌어내도록 개발된
        macOS Big Sur가 Mac에 대대적인 성능 향상을 비롯한 다양한 혜택을
        선사합니다. 강력하게 업데이트된 앱, 아름다운 새 디자인, 업계를 선도하는
        개인 정보 보호 기능과 동급 최고의 보안성까지. Apple의 최첨단
        하드웨어에서 실행되는 최강의 소프트웨어죠.
        <img src="images/image3.png" />
      </p>
      <h2>속도 및 반응성</h2>
      <p>
        속도 및 반응성 M1 칩과 macOS Big Sur가 만나 시스템 전체가 더욱
        빠릿빠릿하게 돌아갑니다. MacBook Pro를 잠에서 깨우면 즉시 깨어나고,
        사진을 넘겨보거나 Safari에서 웹서핑을 하는 등 일상적인 작업도 더욱
        빠르게 실행되죠. 물론 가장 사용량이 많은 앱들도 이 강력한 파워에 힘입어
        아주 매끄럽게 구동된답니다.
        <div>켜는 즉시 강력하고 빠릿하게.</div>
      </p>
      <h2>사상 최대의 앱 컬렉션</h2>
      <p>
        M1 기반으로 제작된 강력한 앱을 실행해보세요. Rosetta 2 덕분에 기존의
        앱도 모두 구동할 수 있습니다. 게다가 이제부터는 즐겨 사용하는 iPhone과
        iPad 앱까지 macOS Big Sur에서 그대로 사용 가능합니다. 사상 최대의 앱
        컬렉션을 이렇게 Mac에서 전부 만나볼 수 있게 된 거죠.
        <img src="images/image4.png" />
      </p>
      <h2>한나절은 너끈한 배터리 성능</h2>
      <p>Mac 사상 가장 긴 최대 20시간의 배터리 사용 시간.</p>
      <h2>Retina 디스플레이 모든 것을 아름답게.</h2>
      <p>
        선명한 Retina 디스플레이가 이미지에 놀라운 수준의 디테일과 사실감을
        더합니다. 텍스트가 또렷하고 선명하게 보입니다. 밝은 LED 백라이트는 짙은
        블랙과 밝은 화이트를 구현하고, P3의 넓은 색영역이 sRGB에서보다 강렬한
        그린과 레드를 표현합니다. 게다가 모든 MacBook Pro에 탑재된 True Tone
        기술이 주변 조명의 색온도에 맞게 자동으로 화이트 밸런스를 조절해
        시각적으로 훨씬 자연스러운 화면을 구현해주죠.
        <img src="images/image5.jpg" />
        <img src="images/image6.jpg" />
      </p>
      <h2>카메라 및 마이크 제대로 보여주고. 제대로 들려주고.</h2>
      <p>
        M1 덕분에 이제 FaceTime HD 카메라가 최신 이미지 신호 프로세서의 능력을
        온전히 활용할 수 있게 되었습니다. 화상 회의의 이미지 품질을 향상시켜주는
        것은 물론 영상 속 명부와 암부 디테일도 더욱 선명하게 보여주죠. 또한
        온라인 회의를 할 때도, 팟캐스트 방송을 할 때도, 친구 및 가족들과 통화할
        때도 새로운 스튜디오급 마이크가 모두에게 당신의 목소리를 더욱 크고
        선명하게 전달합니다.
        <img src="images/image7.jpg" />
        <img src="images/image8.png" />
      </p>
      <h2>FaceTime HD 카메라</h2>
      <p>
        M1 칩은 영상 통화 시 당신의 모습을 최고의 상태로 보여주는 일에도
        일조합니다. 저조도에서도 명부가 그 어느 때보다 선명하게 살아나고, 첨단
        노이즈 감소 기능으로 암부의 디테일도 더욱 또렷하게 보이죠. 얼굴 인식
        기능이 Neural Engine을 활용해 화이트 밸런스 및 노출 레벨을 더욱 잘
        조절하기 때문에 피부 톤도 훨씬 자연스럽답니다.
        <img src="images/image9.png" />
      </p>
      <h2>3 마이크 어레이</h2>
      <p>
        스튜디오 없이도 스튜디오급 퀄리티. 프로급 마이크에 견줄 만큼 향상된 신호
        대 잡음비.
        <StVideo src="videos/video2.mp4" typeof="video/mp4" autoPlay={true} />
      </p>
      <h2>연결성 그 어느 때보다 빠르게 통하다.</h2>
      <p>
        <img src="images/image10.jpg" />
      </p>
    </StDiv>
  );
};

const StDiv = styled.div`
  width: 100vw;
  padding: 10rem 19.4rem;
  color: white;
  & img {
    display: inline-block;
    width: 100%;
  }
`;

const StVideo = styled.video`
  width: 100%;
`;

// const StImg = styled.img`
//   width: 100%;
// `;
export default Main;
