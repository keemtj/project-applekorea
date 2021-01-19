import React from 'react';
import styled from 'styled-components';

const Article = ({ section }) => {
  const {
    headingText,
    headline,
    paragraph,
    keyword,
    modalText,
    image,
    video,
    gridArea,
  } = section;
  console.log('headline', headline);
  console.log('keyword', keyword);
  return (
    <StArticle gridArea={gridArea} video={video}>
      {video && (
        <StVideoWrapper>
          <StVideo src={`videos/${video}`} typeof="video/mp4" autoPlay={true} />
        </StVideoWrapper>
      )}
      <StHeading>{headingText}</StHeading>
      <StWrapper>
        <div>
          {headline && (
            <StHeadline>
              <span>{headline?.[0]}</span>
              <span>{headline?.[1]}</span>
            </StHeadline>
          )}
          {paragraph && <StParagraph>{paragraph}</StParagraph>}
          {keyword && <StKeyword>{keyword}</StKeyword>}
          {modalText && <StButton>{modalText}</StButton>}
        </div>
        {image && (
          <StImageWrapper>
            <StImage src={`images/${image}`} alt="" />
          </StImageWrapper>
        )}
      </StWrapper>
    </StArticle>
  );
};

const StArticle = styled.article`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 3rem;
  background: ${({ video, theme }) => !video && theme.color.linearGradient};
  padding: 4rem 0rem 4rem 4rem;
  overflow: hidden;
  position: relative;
`;

const StHeading = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

const StWrapper = styled.div`
  display: flex;

  & > :first-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 82%;
    height: 100%;
  }
`;

const StHeadline = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-top: 10rem;
  font-size: 7.8rem;
  font-weight: bolder;
  line-height: 1.2;

  & > :first-child {
    color: ${({ theme }) => theme.color.purple};
  }
`;

const StParagraph = styled.p`
  width: 47.5rem;
  min-width: 47.5rem;
  margin-top: 4.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.5;
  word-break: keep-all;
`;

const StKeyword = styled.div``;

const StButton = styled.button`
  /* visibility: hidden; */
  margin-top: 9rem;
  border: 2px solid white;
  border-radius: 3rem;
  background: transparent;
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const StImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left;
`;

const StVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const StVideo = styled.video`
  width: 110%;
`;

export default Article;
