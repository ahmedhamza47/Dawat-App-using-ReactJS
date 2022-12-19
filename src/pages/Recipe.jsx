import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions";

import Swal from "sweetalert2";
function Recipe() {
  const [details, setdetails] = useState({});
  const [active, setActive] = useState("overview");
  let params = useParams();
  const dispatch = useDispatch();
  //console.log(params.recipe);
  const getdetails = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    // console.log(data);
    setdetails(data);
  };
  useEffect(() => {
    getdetails(params.recipe);
  }, [params.recipe]);
  // const wordCount = details.title.split(" ");
  // console.log(wordCount);
  // if (wordCount.length > 0) {
  // }
  const navigate = useNavigate();
  const addToCart = (e) => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item added to Cart",
      text: "Want to see your cart?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Go to Cart",
      cancelButtonText: "Not Now",
      timer: 15000,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
    dispatch(ADD(e));
  };
  return (
    <DetailedWrapper>
      <div className="row">
        <div className="col-xl-4 pl-0 pr-5 mb-3 ">
          <h2>{details.title}</h2>
          <img style={{ marginTop: 40 }} src={details.image} alt="" />
        </div>
        <div className="col-xl-8 justify-content-center text-center pl-5">
          <Info>
            <Btns>
              <Button
                className={active === "overview" ? "active" : ""}
                onClick={() => setActive("overview")}
              >
                Overview
              </Button>
              <Button
                className={active === "detailInfo" ? "active" : ""}
                onClick={() => setActive("detailInfo")}
              >
                Details
              </Button>

              <Button
                onClick={() => {
                  addToCart(details);
                }}
              >
                {" "}
                Add To Cart
              </Button>
            </Btns>
            {active === "overview" && (
              <div>
                <H3 dangerouslySetInnerHTML={{ __html: details.summary }}></H3>
                <h5 className="mt-3 text-left" style={{ color: "#ec7a09" }}>
                  Price : $ {details.pricePerServing}
                </h5>
              </div>
            )}
            {active === "detailInfo" && (
              <div>
                <H3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></H3>
              </div>
            )}
          </Info>
        </div>
      </div>
    </DetailedWrapper>
  );
}

const DetailedWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;

  text-align: center;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  img {
    width: 8cm;
    height: 8cm;
    border-radius: 20px;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    margin: 0 !important;
    padding: 0 !important;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
    text-align: left;
  }
  ul {
    margin-top: 4rem;
  }

  @media screen and (max-width: 992px) {
    display: grid;
  }
`;
const Button = styled.button`
  padding: 1rem 1rem;

  color: #313131;
  background: white;
  border: 2px solid black;

  font-weight: 600;

  cursor: pointer;
  @media screen and (max-width: 992px) {
    margin-top: 2rem;
  }
`;
const Info = styled.div`
  width: 100%;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  margin-left: -10%;
  @media screen and (max-width: 992px) {
    margin-left: 0%;
  }
`;
const H3 = styled.h3`
  font-size: 0.9rem;
  line-height: 25px;
  text-align: justify;
  padding-right: 50px;
  margin-top: 4rem;
  margin-bottom: 0rem;
  text-decoration: none;

  a {
    color: black;
    text-decoration: none;
  }
  @media screen and (max-width: 992px) {
    margin-top: 1.5rem;
  }
`;
export default Recipe;
