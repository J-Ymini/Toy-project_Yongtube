import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import VideoList from '../../components/VideoList/VideoList';
import Detail from '../Detail/Detail';

import { IVideoInfo } from '../../interfaces/interfaces';

import Youtube from '../../service/youtube_fetch';

import styled from 'styled-components';

const Main = ({ history }: RouteComponentProps): JSX.Element => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState<IVideoInfo | null>(null);

  const goToHomepage = () => {
    history.push('/');
    setSelectedVideo(null);
    youtube
      .mostPopular() //
      .then(setVideos)
      .catch(alert);
  };

  const selectVideo = (video: IVideoInfo) => {
    setSelectedVideo(video);
  };

  const search = (query: string) => {
    youtube
      .search(query) //
      .then(video => {
        setVideos(video);
        setSelectedVideo(null);
      })
      .catch(alert);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos)
      .catch(alert);
  }, []);

  return (
    <StyledContainer>
      <SearchBar onSearch={search} onLogoClick={goToHomepage} />
      <StyledContent>
        {selectedVideo && (
          <StyledDetail>
            <Detail video={selectedVideo!} />
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
};

export default Main;

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
