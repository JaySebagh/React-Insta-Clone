import React from 'react';
import IGLogo from './iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i id="cam" class="fab fa-instagram"></i>
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div>
        <input className="search" type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <i id="icon" class="far fa-compass"></i>
        <i id="icon" class="far fa-heart"></i>
        <i id="icon" class="far fa-user"></i>
      </div>
    </div>
  );
};

export default SearchBar;