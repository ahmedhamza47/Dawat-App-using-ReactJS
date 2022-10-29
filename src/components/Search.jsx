import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    
  };
  return (
    <FormStlye onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="search any recipe"
        />
      </div>
    </FormStlye>
  );
}
const FormStlye = styled.form`
  text-align: center;
  justify-content: center;

  margin: 2rem 8rem 0rem 8rem;
  div {
    position: relative;
    width: 100%;
    left: -5%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;

    color: white;
    padding: 1rem 3rem;
    height: 1cm;
    font-size: 0.5cm;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
