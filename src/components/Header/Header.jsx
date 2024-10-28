import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import mohanAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <img src={brainflixLogo} alt="BrainFlix Logo" />
      </a>
      <div className="header__search--section">
        <div className="header__search--container">
          <img
            className="header__search--icon"
            src={searchIcon}
            alt="search icon"
          />
          <input
            className="header__search--bar"
            type="text"
            placeholder="Search"
          ></input>
        </div>

        <img className="header__avatar" src={mohanAvatar} alt="Mohan Avatar" />
      </div>

      <div>
        <button className="header__button">
          <img
            className="header__button--icon"
            src={uploadIcon}
            alt="upload icon"
          />
          Upload
        </button>
      </div>
    </header>
  );
}
export default Header;
