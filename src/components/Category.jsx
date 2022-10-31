import { FaPizzaSlice, FaHamburger, FaBorderNone } from "react-icons/fa";
import { GiNoodles, GiRiceCooker } from "react-icons/gi";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="ml-5">
      <LINK to={"/"}>
        <h1 className="mt-4" style={{ color: "black" }}>
          Popular <span class="orange"> Foods</span>
        </h1>
      </LINK>
      <List>
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
    </div>
  );
}
const LINK = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const List = styled.div`
  display: grid;
  justify-content: left;
  margin: 2rem 0rem 0rem 4rem;
`;
const SLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 8rem;
  height: 8rem;
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
