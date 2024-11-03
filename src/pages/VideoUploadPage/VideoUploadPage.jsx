import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../VideoUploadPage/VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";

function VideoUploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    if (!title || !description) {
      alert("please fill out both fields!");
      return;
    }
    alert("You have successfully uploaded your video!");
    navigate("/");
  };

  const handleCanel = () => {
    setTitle("");
    setDescription("");
    navigate("/");
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
                src={thumbnail}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="upload__button">
            {/* <Link to={`/`}> */}
            <button type="submit" className="upload__button--publish">
              <img
                src={publish}
                alt="publish icon"
                className="upload__img--publish"
              />
              <p>PUBLISH</p>
            </button>
            {/* </Link> */}
            <button
              type="button"
              className="upload__button--cancel"
              onClick={handleCanel}
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
