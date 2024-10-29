import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Details from "./components/Details/Details";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoList from "./VideoList/VideoList";
// import videoDetails from "../src/data/video-details.json";

function App() {

  return (
    <>
      <Header />
      <Video />
      <Details />
      <Comments comments={commentsData} />
      <NextVideos/>
      <VideoList/>
    </>
  );
}

export default App;
