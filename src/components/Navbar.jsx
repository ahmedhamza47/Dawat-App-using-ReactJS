import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="top-section">
      <nav className="navbar navbar-expand-lg navbar-light pt-3">
        <div className="container">
          <a className="navbar-brand lobster" href="index.html">
            dawat.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-auto">
              <li className="nav-item ">
                <a className="nav-link active" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item  dropdown">
                <a
                  className="nav-link inactive dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Elements
                  </a>
                  <a className="dropdown-item" href="/">
                    Menu 2
                  </a>
                  <a className="dropdown-item" href="/">
                    Menu 3
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    More Menu here..
                  </a>
                </div>
              </li>

              <li className="nav-item ">
                <a className="nav-link inactive" href="/">
                  Events <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item  ">
                <a className="nav-link inactive" href="/">
                  Gallery <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item  ">
                <a className="nav-link inactive" href="/">
                  About<span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item ">
                <a className="nav-link inactive" href="/">
                  Contact <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <button type="button" className="btn orange-btn">
              Book a table
            </button>
          </div>
        </div>
      </nav>

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
}

export default Navbar;
