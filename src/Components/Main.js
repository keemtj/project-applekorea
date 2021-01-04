import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <StVideo src="videos/video.mp4" typeof="video/mp4" autoPlay />
      <StImg src="images/image.jpg" />
    </>
  );
};

const StVideo = styled.video`
  width: 100%;
`;
const StImg = styled.img`
  width: 100%;
`;
export default Main;
