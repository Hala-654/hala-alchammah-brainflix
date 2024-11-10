import "../MainVideo/MainVideo.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function Video({ selectedVideo }) {
  return (
    <div className="video-container">
      <div>
        <video
          poster={`${BASE_URL}/${selectedVideo.image}`}
          className="video"
          controls
        />
      </div>
    </div>
  );
}

export default Video;
