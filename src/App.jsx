import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import PokemonListPage from "./pages/PokemonListPage";
import SearchedPokemon from "./pages/SearchedPokemon";

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <IndexPage />
          }
        />
        <Route
          path="/pokemon/all"
          element={
            <PokemonListPage />
          }
        />
        <Route
          path="/pokemon/"
          element={
            <SearchedPokemon />
          }
         />
      </Routes>
    </Router>
  );
}

export default App;
