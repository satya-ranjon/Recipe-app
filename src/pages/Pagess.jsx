import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Catagore from "../components/Catagore";
import Search from "../components/Search";
import SearchResult from "./SearchResult";

export default function Pagess() {
  return (
    <>
      <Search />
      <Catagore />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search-result/:type" element={<SearchResult />} />
      </Routes>
    </>
  );
}
