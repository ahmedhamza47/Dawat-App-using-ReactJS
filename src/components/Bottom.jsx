import React from "react";
import { useState } from "react";
import "./Bottom.css";
import styled from "styled-components";
function Bottom() {
  const [active, setActive] = useState("customer1");

  return (
    <div>
      <div className="middle-dessert-section justify-content-center text-center ">
        <div
          className="title pt-5 pb-4"
          style={{ backgroundColor: "rgba(255, 211, 146, 0.774)" }}
        >
          <h5 className="gray" id="delicious">
            CHOOSE DESSERTS
          </h5>
          <h1>
            Popular <span className="orange"> Desserts</span>
          </h1>
        </div>

        <div className="row justify-content-center text-center px-5  py-5">
          <div className="col-lg-3 col-md-3 dessert-col">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img src={require("../images/dessert/dessert1.png")} alt="" />
              <div className="dessert-info mt-4">
                <p>
                  Cherry Muffin <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img src={require("../images/dessert/dessert2.png")} alt="" />
              <div className="dessert-info mt-4">
                <p>
                  Rose Muffin <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img
                src={require("../images/dessert/dessert3.png")}
                alt=""
                className="mt-4"
                id="little-small-image"
              />
              <div className="dessert-info mt-4">
                <p>
                  Sweet Donut <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-3">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img
                src={require("../images/dessert/dessert4.png")}
                alt=""
                className="mt-4"
                id="little-small-image"
              />
              <div className="dessert-info mt-4">
                <p>
                  Chocolate Cake <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-background">
        <div className="row mx-5 gallery-rows">
          <div className="col-lg-6">
            <h5 className="gray" id="delicious" style={{ fontSize: " 1rem" }}>
              TESTIMONIALS
            </h5>
            <h1 className="gray" style={{ fontSize: " 1rem" }}>
              Satisfied<span className="orange"> Customer</span>
            </h1>
            <div>
              {active === "customer1" && (
                <div className="customer1">
                  <img
                    src={require("../images/customer/customer1.jpg")}
                    alt=""
                    className="my-4"
                    id="customer"
                  />
                  <h1 className="customer-name gray">
                    Hamza<span className="orange"> Ahmed</span>
                  </h1>
                  <p>CEO, Founder</p>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png" />
                  <p className="customer-review gray">
                    "This cozy restaurant has left the best impressions!
                    Hospitable hosts, delicious dishes, beautiful presentation,
                    wide wine list and wonderful dessert. I recommend to
                    everyone! I would like to come back here again and again.
                  </p>
                </div>
              )}
            </div>
            <div>
              {active === "customer2" && (
                <div className="customer2 ">
                  <img
                    src={require("../images/customer/customer2.jpg")}
                    alt=""
                    className="my-4"
                    id="customer"
                  />
                  <h1 className="customer-name gray">
                    Kamal <span className="orange"> Shrestha</span>
                  </h1>
                  <p>Co Founder</p>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png" />
                  <p className="customer-review gray">
                    Excellent food. Menu is extensive and seasonal to a
                    particularly high standard. Definitely fine dining. It can
                    be expensive but worth it and they do different deals on
                    different nights so it's worth checking them out before you
                    book. Highly recommended.
                  </p>
                </div>
              )}
            </div>
            <div>
              {active === "customer3" && (
                <div className="customer3">
                  <img
                    src={require("../images/customer/customer3.jpg")}
                    alt=""
                    className="my-4"
                    id="customer"
                  />
                  <h1 className="customer-name gray">
                    Kushal<span className="orange"> Shrestha</span>
                  </h1>
                  <p>Regular Customer</p>

                  <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png" />
                  <p className="customer-review gray">
                    First time in dawat and YOU have to go! It's the cutest
                    little spot with amazing food. The Hyderabadi Biryani is to
                    die for. IT WAS FIRE!! The service we received was so
                    amazing and we will definitely be back again. They made us
                    feel welcomed and gave us an amazing experience.
                  </p>
                </div>
              )}
            </div>

            <div className="dot" style={{ marginTop: "-2rem" }}>
              <P
                className={active === "customer1" ? "active" : ""}
                onClick={() => setActive("customer1")}
              >
                .
              </P>
              <P
                className={active === "customer2" ? "active" : ""}
                onClick={() => setActive("customer2")}
              >
                .
              </P>
              <P
                className={active === "customer3" ? "active" : ""}
                onClick={() => setActive("customer3")}
              >
                .
              </P>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="gray" id="delicious" style={{ fontSize: "1rem" }}>
              GALLERIES
            </h5>
            <h1 className="gray" style={{ fontSize: " 1rem" }}>
              PHOTO <span className="orange"> GALLERIES</span>
            </h1>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <img
                  src={require("../images/breakfast/breakfast1.jpg")}
                  alt=""
                  className="menu-images gallery my-3 cursor-ptr"
                  id="gallery-img"
                />
                <img
                  src={require("../images/lunch/lunch1.jpg")}
                  alt=""
                  className="menu-images gallery my-3 cursor-ptr"
                  id="gallery-img"
                />
                <button type="button" className="btn orange-btn mt-2">
                  MORE GALLERIES
                </button>
              </div>
              <div className="col-lg-6">
                <img
                  src={require("../images/dinner/dinner2.jpg")}
                  alt=""
                  className="menu-images gallery my-3 cursor-ptr"
                  id="gallery-img"
                />
                <img
                  src={require("../images/lunch/lunch3.jpg")}
                  alt=""
                  className="menu-images gallery my-3 cursor-ptr"
                  id="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fixed-wrap">
          <div className="fixed"></div>
        </div>
      </div>
      <div className="events-section">
        <div className="container ">
          <div className="row justify-content-center text-center py-5">
            <div className="col-md-12">
              <h5 className="gray" id="delicious">
                EVENTS
              </h5>
              <h1>
                Enjoy<span className="orange"> Our Events</span>
              </h1>
            </div>
          </div>

          <div className="row py-4 ">
            <div className="col-lg-6  my-lg-auto">
              <h1 className="orange">Rs. 4999</h1>
              <h1>Birthday Party</h1>

              <p style={{ color: "rgb(122, 117, 117)" }} className="mr-5 mt-3">
                dawat is the best place for birthday parties, to hang out with
                good food, live bands, huka, ambiance, crowd, service. Your pic
                could also come on it's facebook page if you are lucky enough.
              </p>
              <div className="accomodation">
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Separate Birthday Party Table
                </p>
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Photos clicked by our professional Cameraman.
                </p>
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Special discount on drinks
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={require("../images/birthday/birthday2.jpg")}
                alt=""
                className="w-100"
              />
            </div>
          </div>

          <div className="row py-4  py-4">
            <div className="col-lg-6 ">
              <img
                src={require("../images/birthday/gathering.webp")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-lg-6 px-5   ">
              <h1 className="orange">Rs. 4999</h1>
              <h1>Chief Guest Night Party</h1>

              <p style={{ color: "rgb(122, 117, 117)" }} className=" mt-3">
                dawat is the best place for birthday parties, to hang out with
                good food, live bands, huka, ambiance, crowd, service. Your pic
                could also come on it's facebook page if you are lucky enough.
              </p>
              <div className="accomodation">
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Private Arrangements for Chief Guest
                </p>
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Photos clicked by our professional Cameraman.
                </p>
                <p>
                  {" "}
                  <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/double-tick.png" />
                  </span>{" "}
                  Unlimited Drinks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron py-3 mb-0">
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 col-xl-9">
              <h3>Wanna taste our delicious foods and enjoy your time?</h3>
            </div>

            <div className="col-lg-5 col-xl-3">
              <button type="button" className="btn orange-btn">
                Book a table
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="row justify-content-center text-center no-gutters mx-5">
          <div className="col description text-left ">
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
          <div className="col mt-3">
            <h5>Connect Us</h5>
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" />
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" />
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/viber.png" />
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-messenger.png" />
          </div>
          <div className="col contact mt-3">
            <h5>Contact</h5>
            <p>Balaju,Kathmandu</p>
            <p>+977 9861329826</p>
            <p>+977 9849456798</p>
            <p>dawat@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="socket text-dark text-center py-2">
        <p className="orange ">
          &copy;
          <a href="index.html" className="orange">
            dawat.com
          </a>
        </p>
      </div>
    </div>
  );
}
const P = styled.p`
  justify-content: center;
  text-align: center;
  padding: 0rem 0.3rem;
  display: flex;
  outline: none;

  justify-content: center;
  align-items: center;
  color: #313131;

  border: none;
  margin-right: 20rem;
  font-weight: 600;

  cursor: pointer;
  &:checked {
    color: orange;
  }
`;
export default Bottom;
