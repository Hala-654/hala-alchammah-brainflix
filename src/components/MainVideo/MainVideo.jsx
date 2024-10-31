import "../MainVideo/MainVideo.scss";
import uploadVideo from "../../assets/images/Upload-video-preview.jpg";

function Video({ selectedVideo }) {
  return (
    <div className="video-container">
      <video poster={selectedVideo.image} className="video" controls />
    </div>
  );
}

export default Video;
