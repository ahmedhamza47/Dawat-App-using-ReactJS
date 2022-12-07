import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DELETE } from "../redux/actions";
import { useEffect } from "react";
function Navbar() {
  //cart add in cart icon
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState(false);
  // const handleClose = () => {
  //   setCartList(null);
  // };
  const del = (id) => {
    dispatch(DELETE(id));
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    let totalPrice = 0;
    getData.map((element, index) => {
      totalPrice =
        parseFloat(element.pricePerServing) * element.qty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);
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
                  <i className="bi bi-cart4 cart"></i>
                  {getData.length}
                </a>
                <div
                  className="dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  {getData.length ? (
                    <div className="dropdown-item">
                      <div className="heading">
                        <h5 className="mr-3">Photo</h5>
                        <h5>Product Name</h5>
                      </div>
                      {getData.map((item) => {
                        return (
                          <div>
                            <div className="cart-content my-3">
                              <Link to={"/cart"}>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="mx-2 "
                                />
                                <div className="cart-content-description ml-3">
                                  <p className="mb-0">{item.title}</p>
                                  <p>${item.pricePerServing}</p>
                                  <p> Quantity : {item.qty}</p>
                                </div>
                              </Link>
                              <i
                                className="bi bi-trash ml-3 "
                                onClick={() => del(item.id)}
                              ></i>
                            </div>
                          </div>
                        );
                      })}
                      <div className="details-total">
                        <h4>Total :${totalPrice}</h4>
                      </div>
                    </div>
                  ) : (
                    <Link className="dropdown-item" to={"/cart/"}>
                      Your Cart is Empty
                    </Link>
                  )}
                </div>
              </li>
            </ul>
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

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Navbar);
export default Navbar;
