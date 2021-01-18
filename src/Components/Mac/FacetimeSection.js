import React from 'react';
import styled from 'styled-components';

const FacetimeSection = () => {
  return (
    <StSection>
      <StArticle>
        <StHeadline>
          <div>카메라 및 마이크</div>
          <div>제대로 보여주고.</div>
          <div>제대로 돌려주고.</div>
        </StHeadline>
        <StContent>
          M1 덕분에 이제 FaceTime HD 카메라가 최신 이미지 신호 프로세서의 능력을
          온전히 활용할 수 있게 되었습니다. 화상 회의의 이미지 품질을
          향상시켜주는 것은 물론 영상 속 명부와 암부 디테일도 더욱 선명하게
          보여주죠. 또한 온라인 회의를 할 때도, 팟캐스트 방송을 할 때도, 친구 및
          가족들과 통화할 때도 새로운 스튜디오급 마이크가 모두에게 당신의
          목소리를 더욱 크고 선명하게 전달합니다.
        </StContent>
      </StArticle>
      <StFacetimeWrapper>
        <StFacetime1 src="images/mac_facetime1.jpg" alt="페이스타임 이미지1" />
        <StFacetime2 src="images/mac_facetime2.png" alt="페이스타임 이미지2" />
      </StFacetimeWrapper>
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

const StFacetimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.5rem;
  position: relative;
`;

const StFacetime1 = styled.img`
  margin-top: 6rem;
  width: 100%;
  max-width: 112rem;
`;

const StFacetime2 = styled.img`
  width: 92%;
  max-width: 105rem;

  position: absolute;
  top: 8.8rem;
`;
export default FacetimeSection;
