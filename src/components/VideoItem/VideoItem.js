import React from 'react';
import styled from 'styled-components';

export default function VideoItem({ video, onVideoClick, display }) {
  const { thumbnails, title, channelTitle } = video.snippet;
  console.log(display);

  return (
    <StyledContainer
      onClick={() => {
        onVideoClick(video);
      }}
      display={display}
    >
      <StyledVideo>
        <StyledVideoThumbnail
          alt=" video thumnail"
          src={thumbnails.medium.url}
        />
        <StyledMetaData>
          <StyledVideoTitle>{title}</StyledVideoTitle>
          <StyledChannelTitle>{channelTitle}</StyledChannelTitle>
        </StyledMetaData>
      </StyledVideo>
    </StyledContainer>
  );
}

const StyledContainer = styled.li`
  margin-bottom: 0.2em;
  width: ${({ display }) => (display ? '100%' : '50%')};
  padding: 0.5em;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledVideo = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightGray;
  cursor: pointer;
  transition: transform 0.3s;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0.3em;
`;

const StyledMetaData = styled.div`
  margin-left: 3em;
`;

const StyledVideoThumbnail = styled.img`
  width: 40%;
  height: 100%;
  font-size: 0.8rem;
`;

const StyledVideoTitle = styled.p`
  margin: 0 0 0.3em;
  font-size: 0.9rem;
`;

const StyledChannelTitle = styled.p`
  margin: 0;
  font-size: 0.6rem;
`;
