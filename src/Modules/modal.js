// action types
const CPU = 'modal/CPU';

// action creator
export const modalCpu = () => ({ type: CPU });

// initial states
const initialState = {
  cpu: [
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
