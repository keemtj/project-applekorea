import React from 'react';
import styled from 'styled-components';

// section tag: grid items
const Section = ({ section }) => {
  const { gridArea, header, headline, paragraph, modalTrigger } = section;
  return (
    <StSection gridArea={gridArea}>
      <StHeader>
        <h3>{header}</h3>
      </StHeader>
      <StContents>
        <StHeadline>
          <span>{headline?.[0]}</span>
          <span>{headline?.[1]}</span>
          <span>{headline?.[2]}</span>
        </StHeadline>
        <StParagraph>{paragraph}</StParagraph>
        <p>
          이미지가 있으면 이미지,키ㅣ워드가 있으면 키워드, 둘다 있으면 둘다
          <span>키워드1</span>
          <span>키워드2</span>
          <span>키워드3</span>
          <span>이미지</span>
        </p>
        <div>
          {modalTrigger && (
            <button style={{ color: 'white' }}>{modalTrigger}</button>
          )}
        </div>
      </StContents>
      {/* <div>
        <div>Bg 이미지 또는</div>
        <div>Bg 비디오</div>
      </div> */}
    </StSection>
  );
};

const StSection = styled.section`
  grid-area: ${({ gridArea }) => gridArea};
  border-radius: 3rem;
  background: ${({ theme }) => theme.color.linearGradient};
`;

const StHeader = styled.header`
  margin: 4.5rem 4.5rem 0rem;
  font-size: 2rem;
`;

const StContents = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  width: 45%;
  height: 100%;
  padding-left: 4.5rem;

  font-size: 2rem;
`;

const StHeadline = styled.p`
  display: flex;
  flex-direction: column;
`;

const StParagraph = styled.p``;
export default Section;
