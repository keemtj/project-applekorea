const initialState = {
  hardware: [
    {
      headingText: 'CPU',
      headline: ['8코어 CPU', '파워 그자체.'],
      paragraph:
        'M1 칩은 MacBook Pro에 엄청나게 빠른 속도와 파워를 선사합니다. 8코어 CPU가 이전 세대 대비 최대 2.8 배 더 빨라진 프로세싱 속도를 뽐내며 복잡한 워크플로도,막대한 작업량도 거뜬히 처리해내죠.게다가 모든 작업에서 놀랄 만큼 탁월한 에너지 효율성을 발휘한답니다.',
      modalText: 'M1이 엄청난 속도를 내는 비결 알아보기',
    },
    {
      headingText: 'GPU',
      headline: ['8코어 GPU', '아름다움을 완성하는 아우성.'],
      paragraph:
        '8 코어 GPU 아름다움을 완성하는 야수성.M1에 탑재된 8 코어 GPU는 Apple이 제작한 그래픽 프로세서 중 단연코 가장 앞선 성능을 자랑합니다.세상에서 가장 빠른 PC용 통합 그래픽을 제공하는7 이 칩은 무려 5 배나 빨라진 말도 안 되는 스피드의 그래픽 성능을 보여주죠.',
      modalText: 'M1이 그래픽 성능을 높여주는 비결 알아보기',
      keyword: '최대 5배 더 빠른 그래픽 성능',
    },
    {
      headingText: '머신 러닝',
      headline: ['16코어 Neural Engine. 스마트함과 스피드의 만남.'],
      paragraph:
        '머신 러닝(ML) 은 동영상 분석, 음성 인식, 이미지 프로세싱 등 다양한 작업에 어마어마한 처리 속도와 자동화 기능을 더해줍니다.16 코어 Neural Engine 및 관련 기술이 총망라된 M1 칩이 MacBook Pro의 ML 성능을 최고 수준으로 끌어올리죠.',
      keyword: ['16코어 Neural Engine', '최대 11배 더 빠른 ML 성능'],
      modalText: 'M1이 ML 성능을 높여주는 비결 알아보기',
    },
  ],
  software: [
    {
      headingText: 'macOS Big Sur',
      headline: ['', 'M1에서 빛나는 macOS Big Sur의 강력함.'],
      paragraph:
        'M1 칩의 잠재력을 끌어내도록 개발된 macOS Big Sur가 Mac에 대대적인 성능 향상을 비롯한 다양한 혜택을 선사합니다. 강력하게 업데이트된 앱, 아름다운 새 디자인, 업계를 선도하는 개인 정보 보호 기능과 동급 최고의 보안성까지. Apple의 최첨단 하드웨어에서 실행되는 최강의 소프트웨어죠.',
    },
    {
      headingText: '속도 및 반응성',
      paragraph:
        'M1 칩과 macOS Big Sur가 만나 시스템 전체가 더욱 빠릿빠릿하게 돌아갑니다. MacBook Pro를 잠에서 깨우면 즉시 깨어나고, 사진을 넘겨보거나 Safari에서 웹서핑을 하는 등 일상적인 작업도 더욱 빠르게 실행되죠. 물론 가장 사용량이 많은 앱들도 이 강력한 파워에 힘입어 아주 매끄럽게 구동된답니다.',
      keyword: ['켜는 즉시 강력하고 빠릿하게.'],
    },
    {
      headingText: '사상 최대의 앱 컬렉션',
      paragraph:
        'M1 기반으로 제작된 강력한 앱을 실행해보세요. Rosetta 2 덕분에 기존의 앱도 모두 구동할 수 있습니다. 게다가 이제부터는 즐겨 사용하는 iPhone과 iPad 앱까지 macOS Big Sur에서 그대로 사용 가능합니다. 사상 최대의 앱 컬렉션을 이렇게 Mac에서 전부 만나볼 수 있게 된 거죠.',
    },
    {
      headingText: '열 효율',
      headline: ['액티브 쿨링으로 빠른 처리 속도를 유지합니다.'],
    },
    {
      headingText: '한나절은 너끈한 배터리 성능',
      headline: ['Mac 사상 가장 긴 최대 20시간의 배터리 사용 시간.'],
    },
    {
      headingText: '통합 메모리',
      headline: ['한몸으로 움직이다.'],
      paragraph:
        'M1 칩은 최대 16GB의 초고속 통합 메모리를 탑재하고 있습니다. 고대역폭과 저지연성을 자랑하는 이 통합 메모리는 CPU, GPU 그리고 Neural Engine 간 데이터를 효율적으로 공유할 수 있게 해줍니다. 덕분에 당신이 하는 모든 일을 더욱 빠르게 막힘없이 처리할 수 있죠.',
    },
    {
      headingText: 'SSD 저장 장치',
      keyword: ['최대 2TB SSD 저장 장치', '최대 3.3GB/s 순차 읽기 속도'],
    },
    {
      headingText: '보안',
      keyword: ['MacBook Pro. 개인정보는 철저하게.'],
      modalText: 'M1이 개인 정보를 보호하는 비결 알아보기',
    },
  ],
  retinaDisplay: [
    {
      headingText: '밝기',
      headline: '500 니트 밝기',
    },
    {
      headingText: '넓은 색영역(P3)',
      headline: '25% 더 풍부한 색상(sRGB 대비)',
    },
    {
      headingText: 'True Tone 기술',
      headline: '주변 조명에 맞춰 자동 조정되는 화면 밝기.',
    },
  ],
  camera: [
    {
      headingText: 'FaceTime HD 카메라',
      paragraph:
        'M1 칩은 영상 통화 시 당신의 모습을 최고의 상태로 보여주는 일에도 일조합니다. 저조도에서도 명부가 그 어느 때보다 선명하게 살아나고, 첨단 노이즈 감소 기능으로 암부의 디테일도 더욱 또렷하게 보이죠. 얼굴 인식 기능이 Neural Engine을 활용해 화이트 밸런스 및 노출 레벨을 더욱 잘 조절하기 때문에 피부 톤도 훨씬 자연스럽답니다.',
    },
    {
      headingText: '3 마이크 어레이',
      headline: ['스튜디오 없이도 스튜디오급 퀄리티.'],
      paragraph: '프로급 마이크에 견줄 만큼 향상된 신호 대 잡음비.',
    },
  ],
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return state;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { initialState, mainReducer };
