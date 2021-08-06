import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoList from '../../components/VideoList/VideoList';
import Youtube from '../../service/youtube';

import styled from 'styled-components';

export default function Main() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube.search(query).then(setVideos).catch(console.log);
  };

  useEffect(() => {
    youtube.mostPopular().then(setVideos).catch(console.log);
  }, []);

  return (
    <StyledContainer>
      <SearchBar onSearch={search} />
      <VideoList videos={videos} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 80rem;
`;

const youtube = new Youtube();
