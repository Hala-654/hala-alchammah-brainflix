import "../NextVideos/NextVideos.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

function VideoList({ nextVideos }) {
  return (
    <Link to="`/videos/${video.id}">
      {/* <section className="nextVideos">
        <h2 className="nextVideos__title">next videos</h2>
        {nextVideos.map((video) => (
          <nextVideos video={video} key={video.id} />
        ))}
      </section> */}
    </Link>
  );
}

export default VideoList;
