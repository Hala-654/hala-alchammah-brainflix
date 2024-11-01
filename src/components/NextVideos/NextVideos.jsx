import "../NextVideos/NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ selectedVideo, videosData }) {
  const videoData = videosData.filter((video) => video.id !== selectedVideo.id);

  return (
    <div className="NextVideos">
      <h3 className="NextVideos__title">NEXT VIDEOS</h3>
      {videoData.map((video) => (
        <div className="NextVideos__content">
          <Link to={`/videos/${video.id}`}>
            <div>
              <img
                src={video.image}
                className="NextVideos__img"
                alt="video cover image"
              />
            </div>
            <div className="NextVideos__description">
              <h3 className="NextVideos__video--title">{video.title}</h3>
              <p className="NextVideos__video--channel">{video.channel}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default NextVideos;
