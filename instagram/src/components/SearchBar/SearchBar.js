import React from 'react';
import IGLogo from './iglogo.png';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import cam from './cam.png'
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="cam" src={cam} className="cam" />
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <img alt="btn" src={one} className="btn" />
        <img alt="btn" src={two} className="btn" />
        <img alt="btn" src={three} className="btn" />
      </div>
    </div>
  );
};

export default SearchBar;