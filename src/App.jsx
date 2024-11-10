import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";

function App() {
  const [videos, setVideos] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;
  // asynchronous function
  async function getVideos() {
    try {
      const { data } = await axios.get(`${BASE_URL}/videos`);
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }
  useEffect(() => {
    getVideos();
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
