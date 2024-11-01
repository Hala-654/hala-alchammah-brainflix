import "../MainVideo/MainVideo.scss";

function Video({ selectedVideo }) {
  return (
    <div className="video-container">
      <video poster={selectedVideo.image} className="video" controls />
    </div>
  );
}

export default Video;
