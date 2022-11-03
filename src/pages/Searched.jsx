import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
function Searched() {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  searchedRecipe.splice(-1, 1);
  let params = useParams(); //used to get the address from the url
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    //console.log(recipes);
    setSearchedRecipe(recipes.results);
  };
  // console.log(searchedRecipe);
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid>
      {searchedRecipe.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipes/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const Card = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  img {
    width: 80%;
    height: 80%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem 0rem;
    padding-left: 0rem;
    font-size: 1rem;
    color: black;
    @media screen and (max-width: 786px) {
      font-size: 0.7rem;
    }
  }
`;
export default Searched;
