import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { api_key, BASE_URL } from "./utils";
import Header from "./components/Header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";

function App() {
  const [videos, setVideos] = useState(null);
  // null is an initial state

  // asynchronous function
  async function getVideo() {
    const { data } = await axios.get(`${BASE_URL}videos/${api_key}`);
    setVideos(data);
    console.log(data);
    // data are showing!
  }

  useEffect(() => {
    getVideo();
  }, []);

  if (!videos) {
    return <div>Loading something good..</div>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoDetailsPage videos={videos} />} />
        <Route
          path="/videos/:id"
          element={<VideoDetailsPage videos={videos} />}
        />
        <Route path="/upload" element={<VideoUploadPage videos={videos} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
