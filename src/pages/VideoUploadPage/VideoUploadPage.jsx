import { Link } from "react-router-dom";
import "../VideoUploadPage/VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/Icons/publish.svg";

function VideoUploadPage() {
  return (
    <>
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form--wrapper">
          <div className="Upload__form">
            <p className="upload__thumbnail">VIDEO THUMBNAIL</p>
            <img
              className="upload__img"
              src={thumbnail}
              alt="video thumbnail"
            />
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
            <Link to={`/`}>
              <button type="button" className="upload__button--publish">
                <img
                  src={publish}
                  alt="publish icon"
                  className="upload__img--publish"
                />
                <p>PUBLISH</p>
              </button>
            </Link>
            <button type="button" className="upload__button--cancel">
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default VideoUploadPage;
