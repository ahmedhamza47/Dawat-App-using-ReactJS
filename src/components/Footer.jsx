import React from "react";
import "./Bottom.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaViber } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row justify-content-center text-center no-gutters ">
          <div className="col-lg-4 description text-left ">
            <h5>
              About dawat
              <span className="orange" style={{ fontsize: "1.2rem" }}>
                .
              </span>
            </h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className="col-lg-4 my-3">
            <h5>Connect Us</h5>
            <AiOutlineInstagram />
            <SiFacebook />
            <FaViber />
            <GrTwitter />
          </div>
          <div className="col-lg-4 contact mt-3">
            <h5>Contact</h5>
            <p>Balaju,Kathmandu</p>
            <p>+977 9861329826</p>
            <p>+977 9849456798</p>
            <p>dawat@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="socket text-dark justify-content-center text-center py-2">
        <p className="orange ">
          &copy;
          <a href="index.html" className="orange">
            dawat.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
