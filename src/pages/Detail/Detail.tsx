import React from 'react';

import styled from 'styled-components';

import { IVideo } from '../../interfaces/interfaces';

export default function Detail({ video }: IVideo): JSX.Element {
  console.log(video);

  const { title, channelTitle, description } = video.snippet;
  return (
    <StyledContainer>
      <iframe
        id="ytplayer"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <StyledTitle>{title}</StyledTitle>
      <StyledChannelTitle>{channelTitle}</StyledChannelTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: 0.3em;
`;

const StyledTitle = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 0.8em;
`;

const StyledChannelTitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 0.8em;
`;

const StyledDescription = styled.pre`
  white-space: pre-wrap;
`;
