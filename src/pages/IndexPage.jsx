import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Fondo from "../images/fondo.jpeg";
import PokemonLogo from "../images/pokemon-logo.png";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div
      className="App flex flex-col items-center justify-center h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="logo-contenedor">
        <img src={PokemonLogo} alt="pokemon-logo" className="h-40 mb-4" />
      </div>
      <h1 className="font-primary text-5xl mb-6 text-blue-pokemon">
        Gotta catch 'em all!
      </h1>

      <SearchForm />

      <Link to="/pokemon/all">
        <button className="rounded-full bg-yellow-pokemon border border-black text-blue-pokemon py-2 px-6 font-primary mr-48 ml-6 mt-2 active:scale-95">
          See All Pokémons ➔
        </button>
      </Link>
    </div>
  );
}

export default IndexPage;
