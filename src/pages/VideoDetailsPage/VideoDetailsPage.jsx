import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, api_key } from "../../utils";
import axios from "axios";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import MainVideo from "../../components/MainVideo/MainVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import Comments from "../../components/Comments/Comments";
import "../VideoDetailsPage/VideoDetailsPage.scss";

function VideoDetailsPage({ videos }) {
  let { id } = useParams();

  if (!id) {
    id = videos[0].id;
  }

  const [selectedVideo, setSelectedVideo] = useState(null);

  async function getVideoDetails() {
    const { data } = await axios.get(`${BASE_URL}videos/${id}${api_key}`);
    setSelectedVideo(data);
    // console.log(data);
  }

  useEffect(() => {
    getVideoDetails();
  }, [id]);

  if (!selectedVideo) {
    return <div>loading..</div>;
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
