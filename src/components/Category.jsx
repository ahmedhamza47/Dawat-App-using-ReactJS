import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiRiceCooker } from "react-icons/gi";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function Category() {
  return (
    <DIV className="ml-4 justify-content-center text-center">
      <LINK to={"/"}>
        <h1 className="mt-4" style={{ color: "black" }}>
          Popular <span class="orange"> Foods</span>
        </h1>
      </LINK>
      <List className="justify-content-center text-center">
        <SLink to={"/cuisine/Italian"}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/English"}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
          <GiNoodles />
          <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Middle Eastern"}>
          <GiRiceCooker />
          <h4 style={{ textAlign: "center" }}>Middle Eastern</h4>
        </SLink>
      </List>
    </DIV>
  );
}
const DIV = styled.div`
  @media screen and (max-width: 786px) {
    /* .recipe-row {
      margin: ;
    } */
  }
`;
const LINK = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const List = styled.div`
  display: grid;
  justify-content: left;
  margin: 2rem 0rem 0rem 0rem;
  @media screen and (max-width: 786px) {
    display: flex;
  }
`;
const SLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
  @media screen and (max-width: 786px) {
    height: 6rem;
  }
  cursor: pointer;
  transform: scale(0.8);

  &:hover {
    text-decoration: none;
  }
  h4 {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 5%;
    @media screen and (max-width: 786px) {
      font-size: 1rem;
    }
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
