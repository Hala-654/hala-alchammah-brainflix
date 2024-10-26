import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import uploadIcon from "../../assets/Icons/upload.svg";
import mohanAvatar from "../../assets/images/Mohan-muruge.jpg";

import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <img
          src={brainflixLogo}
          alt="BrainFlix Logo"
          className="header__link--logo"
        />
      </a>

      <div className="header-nav">
        <img
          className="header-nav__searchIcon"
          src={searchIcon}
          alt="search icon"
        />
        <input
          className="header-nav__search"
          type="text"
          placeholder="Search"
        ></input>
      </div>

      <div>
        <button className="header-nav__btn">
          <img src={uploadIcon} alt="upload icon" />
          Upload
        </button>
      </div>
      <img className="header__avatar" src={mohanAvatar} alt="Mohan Avatar" />
    </header>
  );
}
export default Header;
