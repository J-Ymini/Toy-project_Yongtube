import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoList from '../../components/VideoList/VideoList';

import styled from 'styled-components';

export default function Main() {
  const [videos, setVideos] = useState([]);

  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAftvuqAFMYxgy9kibeEXJ2PqFS3Wn-bCQ`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => {
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
      })
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAftvuqAFMYxgy9kibeEXJ2PqFS3Wn-bCQ',
      requestOptions
    )
      .then(response => response.json())
      .then(({ items }) => setVideos(items))
      .catch(error => console.log('error', error));
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
