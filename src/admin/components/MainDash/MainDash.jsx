import React from "react";

import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1 className="mb-5">Dashboard</h1>

      <Table />
    </div>
  );
};

export default MainDash;
