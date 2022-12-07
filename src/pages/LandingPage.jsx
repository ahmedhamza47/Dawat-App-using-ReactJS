import React from "react";
import Pages from "./Pages";
import Category from "../components/Category";

import Navbar from "../components/Navbar";
import Search from "../components/Search";

import Bottom from "../components/Bottom";
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Search />} />
      </Routes> */}

      <div className="row pt-3 recipe-row">
        <div className="col-lg-4 col-md-4">
          <Category />
        </div>
        <div className="col-lg-8 col-md-8">
          <Search />
          <Pages />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default LandingPage;
