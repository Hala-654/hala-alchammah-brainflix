import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./utils";
import Header from "./components/Header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]);

  // asynchronous function
  async function getVideo() {
    try {
      const { data } = await axios.get(`${BASE_URL}/videos`);
      setVideos(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
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
