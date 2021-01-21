import React from 'react';
import styled from 'styled-components';

const AppCollection = () => {
  return (
    <StSection>
      <StHeader>
        <h3>사상 최대의 앱 컬렉션</h3>
      </StHeader>
      <StContents>
        <StParagraph>
          M1 기반으로 제작된 강력한 앱을 실행해보세요. Rosetta 2 덕분에 기존의
          앱도 모두 구동할 수 있습니다. 게다가 이제부터는 즐겨 사용하는 iPhone과
          iPad 앱까지 macOS Big Sur에서 그대로 사용 가능합니다. 사상 최대의 앱
          컬렉션을 이렇게 Mac에서 전부 만나볼 수 있게 된 거죠.
        </StParagraph>
        <StImageWrapper>
          <StImage src="images/mac_app_collection.png" alt="앱 컬렉션 이미지" />
        </StImageWrapper>
      </StContents>
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: 5/7/5/13;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  border: none;
  border-radius: 3rem;
  background: center / cover url(images/mac_app_collection_bg.jpg) no-repeat;
  overflow: hidden;
`;

const StHeader = styled.header`
  padding: 4.5rem 4rem 0rem;
  font-size: 2rem;
  font-weight: 500;
`;

const StContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  padding: 0rem 4rem;
`;

const StParagraph = styled.p`
  width: 100%;
  margin-top: 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const StImage = styled.img`
  width: 80%;
  padding-bottom: 6rem;
`;

export default AppCollection;
