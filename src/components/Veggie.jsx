import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import axios from "axios";
function Veggie() {
  const [Veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  // fetch data from the api

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        )
        .then(function (response) {
          // handle success
          console.log(response.data.recipes);
          const data = response.data.recipes;
          localStorage.setItem("veggie", JSON.stringify(data));
          setVeggie(data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
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
              560: {
                perPage: 2,
                gap: "5rem",
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
  margin: 2rem 2rem 2rem 0rem;
  @media screen and (max-width: 1250px) {
    margin: auto;
  }
`;
const Card = styled.div`
  height: 14rem;
  width: 14rem;

  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  &:hover {
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari 3-8 */
    transform: scale(1.05);
  }
  @media screen and (max-width: 1080px) {
    width: 90%;
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
    @media screen and (max-width: 786px) {
      font-size: 0.8rem;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
