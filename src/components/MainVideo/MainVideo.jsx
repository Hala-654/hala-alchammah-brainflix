import "../MainVideo/MainVideo.scss";

function Video({ selectedVideo }) {
  return (
    <div className="video-container">
      <div>
        <video poster={selectedVideo.image} className="video" controls />
      </div>
    </div>
  );
}

export default Video;
