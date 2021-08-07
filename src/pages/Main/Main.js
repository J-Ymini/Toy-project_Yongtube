import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoList from '../../components/VideoList/VideoList';
import Detail from '../Detail/Detail';

import Youtube from '../../service/youtube';

import styled from 'styled-components';

export default function Main({ history }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const goToHomepage = () => {
    history.push('/');
    setSelectedVideo(null);
  };

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query) //
      .then(video => {
        setVideos(video);
        setSelectedVideo(null);
      })
      .catch(console.log);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos)
      .catch(console.log);
  }, []);

  return (
    <StyledContainer>
      <SearchBar onSearch={search} onLogoClick={goToHomepage} />
      <StyledContent>
        {selectedVideo && (
          <StyledDetail>
            <Detail video={selectedVideo} />
          </StyledDetail>
        )}
        <StyledVideoList>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo}
          />
        </StyledVideoList>
      </StyledContent>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 80rem;
`;

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const StyledContent = styled.section`
  display: flex;
`;

const StyledDetail = styled.div`
  flex: 1 1 70%;
`;

const StyledVideoList = styled.div`
  flex: 1 1 30%;
`;
