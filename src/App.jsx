import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Body from "./components/Body/Body";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";
import videoDetails from "../src/data/video-details.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]); // Start with the first video
  const handleVideoSelect = (id) => {
    const newVideo = videoDetails.find((video) => video.id === id);
    setSelectedVideo(newVideo);
  };

  const commentsData = [
    {
      name: "Noah Duncan",
      timestamp: "8/11/2023",
      commentText:
        "Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!",
    },
    {
      name: "Terry Wong",
      timestamp: "8/10/2023",
      commentText:
        "This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!",
    },
    {
      name: "Janice Rodriguez",
      timestamp: "8/9/2023",
      commentText:
        "Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!",
    },
  ];
  return (
    <>
      <Header />
      <Video />
      <Body />
      <Comments comments={commentsData} />
      {/* <NextVideos/> */}
    </>
  );
}

export default App;
