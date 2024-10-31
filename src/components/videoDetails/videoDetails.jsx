import "./VideoDetails.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

function VideoDetails({ selectedVideo }) {
  return (
    <div className="body-container">
      <h1> {selectedVideo.title} </h1>
      <div className="body__author">
        <div className="body__author--info">
          <h3>By {selectedVideo.channel}</h3>
          <p className="silver">
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="body__author--icon">
          <span className="silver">
            <img className="icon__views" src={views} alt="views icon" />
            <p>{selectedVideo.views}</p>
          </span>

          <span className="silver">
            <img className="icon__likes" src={likes} alt="likes icon" />
            <p>{selectedVideo.likes}</p>
          </span>
        </div>
      </div>
      <div className="body__text">
        <span>{selectedVideo.description}</span>
      </div>
    </div>
  );
}
export default VideoDetails;
