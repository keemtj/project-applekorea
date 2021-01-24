import React from 'react';
import styled from 'styled-components';

const KeyboardSection = () => {
  return (
    <StSection>
      <StArticle>
        <StHeadline>
          <div>Magic Keyboard</div>
          <div>글자 그대로 맘에 쏙.</div>
        </StHeadline>
        <StContent>
          Magic Keyboard는 당신의 모든 작업에 속도와 효율성을 더해줍니다. 새롭게
          다듬어진 가위식 메커니즘은 빠른 반응 속도는 물론, 편안하고 조용한
          타이핑 경험을 선사하죠. 필요한 순간 바로 쓸 수 있도록 자주 쓰는 명령이
          Touch Bar에 배치되어 키를 입력하는 데 드는 시간과 수고를 덜어줍니다.
          그리고 Touch ID 덕분에 안전한 로그인을 위한 빠르고 간편한 인증이
          가능하죠.
        </StContent>
      </StArticle>
      <StkeyboardWrapper>
        <StKeyboard src="images/mac_keyboard.jpg" alt="키볻드 이미지" />
      </StkeyboardWrapper>
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
    font-weight: 700;
    text-align: left;
  }
  & div {
    line-height: 1.2;
  }
`;

const StContent = styled.div`
  margin-top: 3rem;
  width: 85%;
  color: #a0a0a5;
  font-size: 2.6rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.4;
  word-break: keep-all;
`;

const StkeyboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1.5rem;
  position: relative;
`;

const StKeyboard = styled.img`
  margin-top: 6rem;
  width: 100%;
  max-width: 120rem;
  z-index: -1;
`;

export default KeyboardSection;
