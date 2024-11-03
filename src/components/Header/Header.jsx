import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import mohanAvatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

import "../Header/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__link" href="/">
          <img src={brainflixLogo} alt="BrainFlix Logo" />
        </a>
      </div>

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
          />
        </div>
        <div>
          <img
            className="header__mobile--avatar"
            src={mohanAvatar}
            alt="Mohan Avatar"
          />
        </div>
      </div>

      <Link to={`/upload`} className="header__tablet">
        <button className="header__tablet--button">
          <img
            className="header__tablet--button__icon"
            src={uploadIcon}
            alt="upload icon"
          />
          <p>UPLOAD</p>
        </button>
      </Link>

      <div>
        <img
          className="header__tablet--avatar"
          src={mohanAvatar}
          alt="Mohan Avatar"
        />
      </div>
    </header>
  );
}

export default Header;
