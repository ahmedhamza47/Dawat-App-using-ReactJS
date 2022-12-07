import React from "react";
import styled from "styled-components";
import "./MenuListItem.css";
const MenuListItem = (item) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Img style={{ marginTop: 40 }} src={item.image} alt="" />
          </div>
          <div className="col-md-8 ">
            <p>{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Img = styled.img`
  width: 5cm;
  border-radius: 20px;
`;
export default MenuListItem;
