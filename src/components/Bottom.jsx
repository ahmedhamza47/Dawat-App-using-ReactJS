import React from "react";
import { useState } from "react";
import "./Bottom.css";
import styled from "styled-components";
function Bottom() {
  const [active, setActive] = useState("customer1");
  console.log(active);
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

        <div
          className="row justify-content-center text-center px-5  py-5"
          style={{ backgroundColor: "rgba(255, 211, 146, 0.774)" }}
        >
          <div className="col-lg-3 col-md-3 col-sm-6 dessert-col">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img src={require("../images/dessert/dessert1.png")} alt="" />
              <div className="dessert-info mt-4">
                <p>
                  Cherry Muffin <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-3 col-sm-6">
            <div className="dessert" style={{ cursor: "pointer" }}>
              <img src={require("../images/dessert/dessert2.png")} alt="" />
              <div className="dessert-info mt-4">
                <p>
                  Rose Muffin <span className="orange">Rs 20</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6">
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
          <div className=" col-lg-3 col-md-3 col-sm-6">
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
        <div className="row mx-5 gallery-rows ">
          <div className="col-lg-6">
            <h5 className="gray">TESTIMONIALS</h5>
            <h2 className="gray">
              Satisfied<span className="orange"> Customer</span>
            </h2>
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
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png"
                    alt=""
                  />
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
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png"
                    alt=""
                  />
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

                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png"
                    alt=""
                  />
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
            <h4 className="gray">GALLERIES</h4>
            <h2 className="gray">
              PHOTO <span className="orange"> GALLERIES</span>
            </h2>
            <div className="row no-gutters">
              <div className="col-lg-6 mx-auto my-4">
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
              </div>
              <div className="col-lg-6 my-4">
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
              <button type="button" className="btn orange-btn mt-5 mx-auto">
                MORE GALLERIES
              </button>
            </div>
          </div>
        </div>

        <div className="fixed-wrap">
          <div className="fixed"></div>
        </div>
      </div>
      <div className="events-section ">
        <div className="container  justify-content-center text-center ">
          <div className="row  py-5 justify-content-center text-center">
            <div className="col-md-12">
              <h5 className="gray" id="delicious">
                EVENTS
              </h5>
              <h1>
                Enjoy<span className="orange"> Our Events</span>
              </h1>
            </div>
          </div>

          <div className="row pb-3 pt-2  parties-row ">
            <div className="col-lg-6  my-lg-auto">
              <h1 className="orange">Rs. 4999</h1>
              <h1>Birthday Party</h1>

              <p
                style={{ color: "rgb(122, 117, 117)" }}
                className="parties-par mt-3"
              >
                dawat is the best place for birthday parties, to hang out with
                good food, live bands, huka, ambiance, crowd, service. Your pic
                could also come on it's facebook page if you are lucky enough.
              </p>
              <div className="accomodation">
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
                  </span>{" "}
                  Separate Birthday Party Table
                </p>
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
                  </span>{" "}
                  Photos clicked by our professional Cameraman.
                </p>
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
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

          <div className="row py-4 parties-row py-4">
            <div className="col-lg-6 ">
              <img
                src={require("../images/birthday/gathering.webp")}
                alt=""
                className="w-100 mb-3"
              />
            </div>
            <div className="col-lg-6 px-5   ">
              <h1 className="orange">Rs. 4999</h1>
              <h1>Chief Guest Night Party</h1>

              <p
                style={{ color: "rgb(122, 117, 117)" }}
                className=" parties-par mt-3"
              >
                dawat is the best place for birthday parties, to hang out with
                good food, live bands, huka, ambiance, crowd, service. Your pic
                could also come on it's facebook page if you are lucky enough.
              </p>
              <div className="accomodation">
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
                  </span>{" "}
                  Private Arrangements for Chief Guest
                </p>
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
                  </span>{" "}
                  Photos clicked by our professional Cameraman.
                </p>
                <p>
                  {" "}
                  <span>
                    <img
                      src="https://img.icons8.com/material-outlined/24/000000/double-tick.png"
                      alt=""
                    />
                  </span>{" "}
                  Unlimited Drinks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron justify-content-center text-center py-3 mb-0">
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
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/viber.png"
              alt=""
            />
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-messenger.png"
              alt=""
            />
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
}
const P = styled.p`
  padding: 0rem 0.3rem;
  color: #313131;
  font-weight: 600;
  cursor: pointer;
  &:checked {
    color: orange;
  }
`;
export default Bottom;
