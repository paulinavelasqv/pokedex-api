import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import PokemonListPage from "./pages/PokemonListPage";

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
      </Routes>
    </Router>
  );
}

export default App;
