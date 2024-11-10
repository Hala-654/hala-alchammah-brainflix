import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { BASE_URL } from "../../utils";
import axios from "axios";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import Comments from "../../components/Comments/Comments";
import "../VideoDetailsPage/VideoDetailsPage.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function VideoDetailsPage({ videos }) {
  let { id } = useParams();

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (videos && videos.length > 0) {
        if (!id) {
          id = videos[0].id;
        }
        try {
          const { data } = await axios.get(`${BASE_URL}/videos/${id}`);
          setSelectedVideo(data);
        } catch (error) {
          console.error("Error fetching video details:", error);
        }
      }
    }
    fetchData();
  }, [id, videos]);

  if (!videos || videos.length === 0 || !selectedVideo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MainVideo selectedVideo={selectedVideo} />
      <div className="container">
        <div className="container__details">
          <VideoDetails selectedVideo={selectedVideo} />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <div className="container__videos">
          <NextVideos selectedVideo={selectedVideo} videosData={videos} />
        </div>
      </div>
    </div>
  );
}

export default VideoDetailsPage;
