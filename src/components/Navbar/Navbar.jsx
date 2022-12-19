import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../redux/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BsTrash } from "react-icons/bs";
function Navbar() {
  //cart add in cart icon
  const getData = useSelector((state) => state.cartReducer.carts);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const dispatch = useDispatch();
  //const [cartList, setCartList] = useState(false);
  // const handleClose = () => {
  //   setCartList(null);
  // };
  const del = (id) => {
    dispatch(DELETE(id));
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    let totalPrice = 0;
    getData.map(
      (element) =>
        (totalPrice =
          parseFloat(element.pricePerServing) * element.qty + totalPrice)
    );
    setTotalPrice(totalPrice.toFixed(2));
  };
  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  const handleLogin = () => {
    loginWithRedirect();
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <div>
      <nav className="navbar  navbar-expand-lg   shadow-5-strong pt-3">
        <div className="container">
          <a className="navbar-brand lobster" href="index.html">
            dawat.
          </a>
          <button
            className="navbar-toggler ml-auto custom-toggler"
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
                <Link to={"/"}>
                  <div className="nav-link active">
                    Home <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>

              <li className="nav-item ">
                <div className="nav-link inactive" href="">
                  Events <span className="sr-only">(current)</span>
                </div>
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
              <li className="nav-item dropdown cart-dropdown">
                <a
                  className=" inactive dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-cart4 cart"></i>
                  {getData.length !== 0 && (
                    <span className="cart-length">{getData.length}</span>
                  )}
                </a>
                <div
                  className="dropdown-menu cart-dropdown-menu "
                  aria-labelledby="navbarDropdown"
                >
                  {getData.length ? (
                    <div>
                      <div className="dropdown-item">
                        <div className="heading">
                          <h5 className="mr-3">Photo</h5>
                          <h5>Product Name</h5>
                        </div>
                      </div>
                      {getData.map((item) => {
                        return (
                          <div className="dropdown-item mb-2" key={item.id}>
                            <div className="cart-content ">
                              <Link className="link" to={`/cart`}>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="mr-2 my-auto "
                                />
                                <div className="cart-content-description ml-3 mr-5">
                                  <p className="">{item.title}</p>
                                  <p>${item.pricePerServing}</p>
                                  <p> Quantity : {item.qty}</p>
                                </div>
                              </Link>
                              <BsTrash
                                className="dropdown-trash "
                                onClick={() => del(item.id)}
                              />
                            </div>
                          </div>
                        );
                      })}
                      <div class="dropdown-divider"></div>
                      <div className="dropdown-item">
                        <div className="details-total">
                          <h4>Total : ${totalPrice}</h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="dropdown-item">Your Cart is Empty</div>
                  )}
                </div>
              </li>

              {/* user login and logout */}

              {isAuthenticated && (
                <li className="nav-item right  user-dropdown dropdown mt-2">
                  <div
                    className=" inactive dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={user.picture}
                      alt={user.name}
                      style={{ width: "2.5rem", height: "2.5rem" }}
                    />
                  </div>
                  <div
                    className="dropdown-menu user-dropdown-menu justify-content-center text-center"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="dropdown-item">{user.name}</div>

                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item">
                      <button
                        type="button"
                        className="btn btn-outline-warning orange-btn mt-2"
                        onClick={() => handleLogout()}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </li>
              )}
              {!isAuthenticated && (
                <li className="nav-item user-dropdown my-auto ">
                  <button
                    className="btn btn-outline-warning mt-1 "
                    onClick={() => handleLogin()}
                  >
                    {" "}
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
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
