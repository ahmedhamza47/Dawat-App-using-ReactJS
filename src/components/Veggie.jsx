import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
function Veggie() {
  const [Veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  // fetch data from the api
  const getVeggie = async () => {
    const check = localStorage.getItem("Veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json(); //api bata return garerko array lai data ma save garne
      localStorage.setItem("Veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3 className="mb-4">Veggie Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,

            drag: "free",
            breakpoints: {
              786: {
                perPage: 2,
              },
            },
          }}
        >
          {Veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <Card>
                    <Gradient>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                    </Gradient>
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 2rem 4rem 2rem 0rem;
`;
const Card = styled.div`
  height: 14rem;
  width: 14rem;

  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 786px) {
    width: 10rem;
    height: 10rem;
  }
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, 0%);
    color: white;

    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0, 8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
