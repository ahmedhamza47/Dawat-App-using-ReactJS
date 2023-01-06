import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import CardDetails from "../components/cartDetails/CardDetails";
import AdminPage from "../admin/AdminPage";
const MainPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/cart" element={<CardDetails />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainPages;
