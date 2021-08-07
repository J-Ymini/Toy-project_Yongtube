import React from 'react';

import styled from 'styled-components';

export default function Detail({ video }) {
  const { title, channelTitle, description } = video.snippet;

  return (
    <StyledContainer>
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
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
