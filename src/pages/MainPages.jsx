import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import CardDetails from "../components/CardDetails";

const MainPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/cart" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainPages;
