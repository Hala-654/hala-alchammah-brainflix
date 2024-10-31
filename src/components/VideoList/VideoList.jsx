import "../NextVideos/NextVideos.scss";
import videoDetails from "../../data/video-details.json";
import { useState } from "react";

function VideoList({ nextVideos, handleClick }) {
  return (
    <section className="nextVideos">
      <h2 className="nextVideos__title">next videos</h2>
      {nextVideos.map((video) => (
        <nextVideos video={video} key={video.id} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default VideoList;
