import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Comments from "./components/Comments/Comments";
import videosData from "./data/video-details.json";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  const [selectedVideo, setSelecetedVideo] = useState(videosData[0]);
  function handleClick(selectedVideo) {
    setSelecetedVideo(selectedVideo);
  }
  return (
    <>
      <Header />
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

export default App;
