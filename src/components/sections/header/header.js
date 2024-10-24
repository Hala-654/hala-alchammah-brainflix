import React from "react";
import brainflixLogo from '../../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../../assets/Icons/search.svg';
import uploadIcon from '../../../assets/Icons/upload.svg';
import mohanAvatar from '../../../assets/images/Mohan-muruge.jpg';

import 'src/components/sections/header/header.scss'


function header() {
    return (
        <header className="header">
            <img src={brainflixLogo} alt="BrainFlix Logo" className="header__logo"/>
            <div className="header-nav">
                <input className="header-nav__search" placeholder="search"></input>
                <img className="header-nav__searchIcon" src={searchIcon} alt="search icon" />
            </div>
            <a className="header-nav__btn" href="">
                <img src={uploadIcon} alt="upload icon"/>
                upload
            </a>
            <div className="header-nav__avatar">
                <img src={mohanAvatar} alt="Mohan Avatar"/>
            </div>
        </header>
    )
}
export default header