import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, api_key } from "../../utils";
import axios from "axios";

function VideoUploadPage({ ids }) {
  //   console.log("showing something");

  const { videoId } = useParams();
  // const id = videoId ?? ids[0];

  const [VideoDetailsPage, setVideoDetailsPage] = useState(null);

  async function getVideoDetails() {
    const { videos } = await axios.get(`${BASE_URL}${api_key}`);
    getVideoDetails(videos);
  }

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  console.log(VideoDetailsPage);
  if (!VideoDetailsPage) {
    return <div>hopefully loading something</div>;
  }
  return <h2>Upload page!</h2>;
}

export default VideoUploadPage;
