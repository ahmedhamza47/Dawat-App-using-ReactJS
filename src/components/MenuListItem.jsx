import React from "react";
import styled from "styled-components";

const MenuListItem = (item) => {
  return (
    <div>
      <div className="container">
        <Row>
          <div className="col-md-4">
            <Img style={{ marginTop: 40 }} src={item.image} alt="" />
          </div>
          <div className="col-md-8 ">
            <p>{item.title}</p>
          </div>
        </Row>
      </div>
    </div>
  );
};
const Img = styled.img`
  width: 5cm;
  border-radius: 20px;
`;
const Row = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export default MenuListItem;
