import React from "react";
import "./Navbar/Navbar.css";
const TopImage = () => {
  return (
    <div className="top-section">
      <div className="top-text-section text-center">
        <h5 className="gray" id="delicious">
          ENJOY YOUR HEALTHY DELICIOUS MEAL
        </h5>
        <h1 className="lobster" id="treat">
          Treat Yourself
        </h1>
        <h5 className="gray" id="description">
          We provide the best delicious meals in all of the Kathmandu valley
          with variety of dishes to choose from & home delivery option as well
          as packaging.
        </h5>
        <button type="button" className="btn orange-btn mt-3">
          EXPLORE NOW
        </button>
      </div>
      <div className="top-icon-section">
        <a href="http://www.facebook.com" target="/">
          <i className="fab fa-facebook-f" id="icon"></i>
        </a>
        <a href="http://twitter.com" target="/">
          <i className="fab fa-twitter" id="icon"></i>
        </a>
        <a href="http://www.instagram.com" target="/">
          <i className="fab fa-instagram" id="icon"></i>
        </a>
        <a href="http://www.youtube.com" target="/">
          <i className="fab fa-youtube" id="icon"></i>
        </a>
      </div>
    </div>
  );
};

export default TopImage;
