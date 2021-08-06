import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import styled from 'styled-components';

export default function VideoList({ videos }) {
  return (
    <StyledContainer>
      {videos.map(video => {
        return <VideoItem key={video.id} video={video}></VideoItem>;
      })}
    </StyledContainer>
  );
}

const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  list-style: none;
`;
