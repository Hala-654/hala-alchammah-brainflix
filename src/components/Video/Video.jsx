import "../Video/Video.scss";
import uploadVideo from "../../assets/images/Upload-video-preview.jpg";
import play from "../../assets/Icons/play.svg";
import volume from "../../assets/Icons/volume_up.svg";
import fullscreen from "../../assets/Icons/fullscreen.svg";

function Video() {
  const handlePlay = () => {
    console.log("Play button was clicked");
  };
  const handleVolume = () => {
    console.log("Volume button was clicked");
  };
  const handleFullscreen = () => {
    console.log("Fullscreen button was clicked");
  };

  return (
    <div className="video-container">
      <video poster={uploadVideo} className="video" />
      <div className="controls">
        <div className="controls-left">
          <button className="controls-left__play" onClick={handlePlay}>
            <img src={play} alt="play icon" />
          </button>
        </div>

        <div className="controls-right">
          <button
            className="controls-right__fullscreen"
            onClick={handleFullscreen} >
            <img src={fullscreen} alt="fullscreen icon" />
          </button>
          <button className="controls-right__volumn" onClick={handleVolume}>
            <img src={volume} alt="volumn icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;
