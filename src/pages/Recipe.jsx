import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function Recipe() {
  const [details, setdetails] = useState({});
  const [active, setActive] = useState("overview");
  let params = useParams();
  console.log(params.recipe);
  const getdetails = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data);
    setdetails(data);
  };
  useEffect(() => {
    getdetails(params.recipe);
  }, [params.recipe]);
  // const wordCount = details.title.split(" ");
  // console.log(wordCount);
  // if (wordCount.length > 0) {
  // }
  return (
    <DetailedWrapper>
      <div>
        <h2>{details.title}</h2>
        <img style={{ marginTop: 40 }} src={details.image} alt="" />
      </div>
      <Info>
        <Btns>
          <Button
            className={active === "overview" ? "active" : ""}
            onClick={() => setActive("overview")}
          >
            Overview
          </Button>
          <Button
            className={active === "instructions" ? "active" : ""}
            onClick={() => setActive("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={active === "ingredients" ? "active" : ""}
            onClick={() => setActive("ingredients")}
          >
            Ingredients
          </Button>
        </Btns>
        {active === "overview" && (
          <div>
            <H3 dangerouslySetInnerHTML={{ __html: details.summary }}></H3>
          </div>
        )}
        {active === "instructions" && (
          <div>
            <H3 dangerouslySetInnerHTML={{ __html: details.instructions }}></H3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailedWrapper>
  );
}

const DetailedWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 5rem;

  justify-content: center !important;
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
  }
  ul {
    margin-top: 4rem;
  }
  @media screen and (max-width: 786px) {
    display: grid;
  }
`;
const Button = styled.button`
  padding: 1rem 1rem;
  display: flex;

  justify-content: center;
  align-items: center;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 20rem;
  font-weight: 600;

  cursor: pointer;
  @media screen and (max-width: 786px) {
    margin-top: 2rem;
  }
`;
const Info = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;
const Btns = styled.div`
  display: flex;
  gap: 20px;
`;
const H3 = styled.h3`
  font-size: 0.9rem;
  line-height: 25px;
  text-align: justify;
  padding-right: 25px;
  margin-top: 3.5rem;
  @media screen and (max-width: 786px) {
    margin-top: 1.5rem;
  }
`;
export default Recipe;
