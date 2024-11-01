import "./VideoDetails.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoDetails({ selectedVideo }) {
  const { title, channel, timestamp, views, likes, description } =
    selectedVideo;
  return (
    <div className="body-container">
      <h1> {title} </h1>
      <div className="body__author">
        <div className="body__author--info">
          <h3>By {channel}</h3>
          <p className="silver">{new Date(timestamp).toLocaleDateString()}</p>
        </div>
        <div className="body__author--icon">
          <span className="silver">
            <img className="icon__views" src={viewsIcon} alt="views icon" />
            <p>{views}</p>
          </span>

          <span className="silver">
            <img className="icon__likes" src={likesIcon} alt="likes icon" />
            <p>{likes}</p>
          </span>
        </div>
      </div>
      <div className="body__text">
        <span>{description}</span>
      </div>
    </div>
  );
}
export default VideoDetails;
