import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <StMain>
      <StVideo src="videos/video.mp4" typeof="video/mp4" autoPlay={true} />
      <StImg src="images/image.jpg" />
    </StMain>
  );
};

const StMain = styled.main`
  width: 100vw;
  padding: 10rem 10rem;
`;

const StVideo = styled.video`
  width: 100%;
`;

const StImg = styled.img`
  width: 100%;
`;
export default Main;
