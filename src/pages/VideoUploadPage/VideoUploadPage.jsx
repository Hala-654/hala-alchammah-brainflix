import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../VideoUploadPage/VideoUploadPage.scss";
import publish from "../../assets/Icons/publish.svg";
import axios from "axios";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

const BASE_URL = import.meta.env.VITE_API_URL;

function VideoUploadPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    if (title === "" || description === "") {
      alert("please fill out both fields!");
      return;
    }
    alert("You have successfully uploaded your video!");
    postToAPI(title, description);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const postToAPI = async (title, description) => {
    try {
      const response = await axios.post(`${BASE_URL}/videos`, {
        title,
        description,
      });
      alert(`The video with the title of: ${title} has been uploaded!`);
      navigate("/");
    } catch (error) {
      console.log("Something went wrong in posting to API!");
    }
  };
  return (
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form onSubmit={handleSubmit} className="upload__wrapper">
          <div className="upload__form">
            <div className="upload__details">
              <h3 className="upload__thumbnail">VIDEO THUMBNAIL</h3>
              <img
                className="upload__img"
                src={uploadImage}
                alt="video thumbnail"
              />
            </div>

            <div className="upload__boxes">
              <p className="upload__video--title">TITLE YOUR VIDEO</p>
              <textarea
                className="upload__box"
                id="title"
                name="title"
                rows="2"
                placeholder="Add a title to your video"
                spellCheck="false"
              ></textarea>
              <p className="upload__video--description">
                ADD A VIDEO DESCRIPTION
              </p>
              <textarea
                className="upload__box"
                id="description"
                name="description"
                rows="6"
                placeholder="Add a description to your video"
                spellCheck="true"
              ></textarea>
            </div>
          </div>
          <div className="upload__button">
            <button type="submit" className="upload__button--publish">
              <img
                src={publish}
                alt="publish icon"
                className="upload__img--publish"
              />
              <p>PUBLISH</p>
            </button>
            <button
              type="button"
              className="upload__button--cancel"
              onClick={handleCancel}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default VideoUploadPage;
