import React, { useState, useEffect } from 'react';
import VideoList from '../../components/VideoList/VideoList';

export default function Main(params) {
  const [videos, setVideos] = useState([]);

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
      .then(({ items }) => {
        setVideos(items);
        console.log(items);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
}
