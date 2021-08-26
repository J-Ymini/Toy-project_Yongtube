import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

import styled from 'styled-components';

import { IVideoList } from '../../interfaces/interfaces';

export default function VideoList({
  videos,
  onVideoClick,
  display,
}: IVideoList) {
  console.log(videos);
  return (
    <StyledContainer>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          ></VideoItem>
        );
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
