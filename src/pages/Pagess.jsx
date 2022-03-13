import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Catagore from "../components/Catagore";
import Search from "../components/Search";
import SearchResult from "./SearchResult";
import NotFound from "./NotFound";
import RacipeDitiels from "./RacipeDitiels";
import Logo from "../components/Logo";

export default function Pagess() {
  console.log("Pagess page");

  return (
    <>
      <Logo />
      <Search />
      <Catagore />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search-result/:type" element={<SearchResult />} />
        <Route path="/recipe-ditiels/:recipeID" element={<RacipeDitiels />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
