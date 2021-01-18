import React from 'react';
import styled from 'styled-components';

const RetinaSection = () => {
  return (
    <StSection>
      <StArticle>
        <StHeadline>
          <div>Retina 디스플레이</div>
          <div>모든 것을 아름답게.</div>
        </StHeadline>
        <StContent>
          선명한 Retina 디스플레이가 이미지에 놀라운 수준의 디테일과 사실감을
          더합니다. 텍스트가 또렷하고 선명하게 보입니다. 밝은 LED 백라이트는
          짙은 블랙과 밝은 화이트를 구현하고, P3의 넓은 색영역이 sRGB에서보다
          강렬한 그린과 레드를 표현합니다. 게다가 모든 MacBook Pro에 탑재된 True
          Tone 기술이 주변 조명의 색온도에 맞게 자동으로 화이트 밸런스를 조절해
          시각적으로 훨씬 자연스러운 화면을 구현해주죠.
        </StContent>
      </StArticle>
      <StRetinaWrapper>
        <StRetina1
          src="images/mac_retina1.jpg"
          alt="레티나 디스플레이 이미지1"
        />
        <StRetina2
          src="images/mac_retina2.jpg"
          alt="레티나 디스플레이 이미지2"
        />
      </StRetinaWrapper>
    </StSection>
  );
};

const StSection = styled.section`
  width: 100%;
  margin-top: 18rem;
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
  font-size: 7.5rem;
  font-weight: 800;
  & :first-child {
    color: #a0a0a5;
  }
  & div {
    line-height: 1.2;
  }
`;

const StContent = styled.div`
  margin-top: 3rem;
  width: 74%;
  color: #a0a0a5;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.4;
  word-break: keep-all;
`;

const StRetinaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.5rem;
  position: relative;
`;

const StRetina1 = styled.img`
  margin-top: 6rem;
  width: 100%;
  max-width: 120rem;
`;

const StRetina2 = styled.img`
  width: 74%;
  max-width: 92rem;
  margin-top: 1rem;

  position: absolute;
`;
export default RetinaSection;
