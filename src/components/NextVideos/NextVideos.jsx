import "../NextVideos/NextVideos.scss";
import { useState } from "react";
import videoData from "../../data/video-details.json";

// NextVideos function to define a video playing and a list of next video by id that exclude the currently playing video
// returns video details, comment form, and comment list from json file
function NextVideos({ selectedVideo, videosData, handleClick }) {
  const videoData = videosData.filter((video) => video.id !== selectedVideo.id);

  return (
    <div className="NextVideos">
      <h3 className="NextVideos__title">NEXT VIDEOS</h3>
      {videoData.map((video) => (
        <div key={video.id} className="NextVideos__content" onClick={() => handleClick(video)}>
          <div>
            <img src={video.image} className="NextVideos__img" alt="video cover image" />
          </div>
          <div className="NextVideos__description">
            <h3 className="NextVideos__video--title">{video.title}</h3>
            <p className="NextVideos__video--channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NextVideos;
