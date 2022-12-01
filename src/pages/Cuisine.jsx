import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  cuisine.splice(-1, 1);
  console.log(cuisine.length);
  let params = useParams(); // fetch keywords from the url
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  console.log(process.env.REACT_APP_API_KEY);
  //get cuisine from the api-
  const getCuisine = async (name) => {
    let check = localStorage.getItem(`${name}`);
    if (check) {
      setCuisine(JSON.parse(check));
    } else {
      let api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      let data = await api.json();
      console.log(data);
      localStorage.setItem(`${name}`, JSON.stringify(data.results));

      setCuisine(data.results);
    }
  };
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <div className="container">
            <Card key={item.id}>
              <Link to={"/recipes/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          </div>
        );
      })}
    </Grid>
  );
}
const Grid = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`;
const Card = styled.div`
  overflow: hidden;
  position: relative;
  justify-content: center;
  text-align: center;
  margin-bottom: -8%;
  &:hover {
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari 3-8 */
    transform: scale(1.05);
  }
  img {
    position: relative;
    left: 0;
    width: 90%;
    height: 90%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    font-size: 1rem;
    color: black;
    text-align: center;
    padding: 1rem;
    @media screen and (max-width: 786px) {
      font-size: 0.7rem;
    }
  }
`;
export default Cuisine;
