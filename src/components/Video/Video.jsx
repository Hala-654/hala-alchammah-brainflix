import "../Video/Video.scss";
import uploadVideo from "../../assets/images/Upload-video-preview.jpg";


function Video() {

  return (
    <div className="video-container">
      <video poster={uploadVideo} className="video" controls />
      <div className="controls">
      </div>
    </div>
  );
}

export default Video;
