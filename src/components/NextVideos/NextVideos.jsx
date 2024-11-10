import "../NextVideos/NextVideos.scss";
import { Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL;

function NextVideos({ selectedVideo, videosData }) {
  if (!videosData || !selectedVideo) {
    return <div>Loading...</div>;
  }
  const videoData = videosData.filter((video) => video.id !== selectedVideo.id);
  return (
    <div className="NextVideos">
      <h3 className="NextVideos__title">NEXT VIDEOS</h3>
      {videoData.map((video) => (
        <div key={video.id}>
          <Link
            to={`/videos/${video.id}`}
            className="NextVideos__content"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={`${BASE_URL}/${video.image}`}
              className="NextVideos__img"
              alt={video.title}
            />
            <div className="NextVideos__description">
              <h3 className="NextVideos__video--title">{video.title}</h3>
              <span className="NextVideos__video--channel">
                {video.channel}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default NextVideos;
