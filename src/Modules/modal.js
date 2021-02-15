// action types
const CPU = 'modal/CPU';

// action creator
export const modalCpu = () => ({ type: CPU });

// initial states
const initialState = {
  subContents: true,
  cpucontents: [
    {
      id: 0,
      subtitle: '8코어 CPU',
      paragraph:
        'M1에 담긴 8코어 CPU는 지금까지 Apple이 제작한 CPU 중 가장 뛰어난 성능을 자랑합니다. 성능 코어 4개와 효율 코어 4개가 힘을 합쳐 고사양 멀티스레드 작업들도 척척 해내죠. 그 결과 적은 전력으로도 비약적으로 향상된 성능을 발휘하기 때문에 배터리 사용 시간도 크게 늘어납니다.',
    },
    {
      id: 1,
      subtitle: '4개의 성능 코어',
      paragraph:
        'Apple의 고성능 코어는 저전력 프로세서 중 세계에서 가장 빠른 CPU 코어입니다.3 이 성능 코어를 M1은 무려 4개나 탑재하여 성능 면에서 엄청난 도약을 이루어냈죠. Xcode에서 컴파일 작업을 처리하고, Logic Pro에서 다수의 트랙, 플러그인, 가상 악기들을 이용해 음악을 전문가급 고품질로 레코딩, 믹싱, 마스터링하고, Adobe Lightroom에서 멋진 이미지를 완성하는 일까지. 전례 없이 빠른 속도와 반응성을 경험할 수 있습니다.',
    },
    {
      id: 2,
      subtitle: '4개의 효율 코어',
      paragraph:
        '효율 코어 4개가 겨우 10분의 1밖에 안 되는 전력으로 일상적인 일들을 순식간에 처리해냅니다. 가벼운 작업들은 이 효율 코어가 이름 그대로 가장 효율적으로 처리해주기 때문에 성능 코어는 워크로드가 가장 큰 작업들에 집중할 수 있게 되죠.',
    },
  ],
  cpuSubcontents: [
    { id: 0, name: 'Xcode', value: 2.8, text: '더 빠른 프로젝트 빌드' },
    {
      id: 1,
      name: 'Final Cut Pro',
      value: 2.8,
      text: '더 빠른 ProRes 인코딩 변환',
    },
    {
      id: 2,
      name: 'Affinity Photo',
      value: 2.0,
      text: '더 빠른  멀티코어 벡터 성능',
    },
    {
      id: 3,
      name: 'Logic Pro',
      value: 1.8,
      text: '더 많은 Amp Designer 플러그인',
    },
  ],
};

// reducer
const modal = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default modal;
