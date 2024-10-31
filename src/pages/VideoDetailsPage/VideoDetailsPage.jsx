import { useState } from "react";
import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import videosData from "../../data/video-details.json";
import NextVideos from "../../components/NextVideos/NextVideos";


function VideoDetailsPage() {
    const [selectedVideo, setSelecetedVideo] = useState(videosData[0]);
    function handleClick(selectedVideo) {
      setSelecetedVideo(selectedVideo);
    }
    return (
      <>
        <MainVideo selectedVideo={selectedVideo} />
        <VideoDetails selectedVideo={selectedVideo} />
        <Comments selectedVideo={selectedVideo} />
        <div>
          <NextVideos
            selectedVideo={selectedVideo}
            videosData={videosData}
            handleClick={handleClick}
          />
        </div>
      </>
    );
}

export default VideoDetailsPage