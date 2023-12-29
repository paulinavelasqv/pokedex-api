import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import SearchPokemon from "../components/SearchPokemon";


function SearchedPokemon() {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  

  const searchPokemon = (pokemonName) => {
    // Actualizar el estado con el nombre del Pokémon buscado
    setSearchedPokemon(pokemonName.texto.trim());
    console.log(searchedPokemon);
  };


  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between p-4 bg-gray-200">
        <div className="flex items-center cursor-pointer active:scale-90">
          <Link to="/">
            <AiFillHome className="text-3xl" style={{ color: "#1D2C5E" }} />
          </Link>
        </div>
        <div className="flex flex-col items-center ml-2">
          <h1 className="font-primary text-5xl text-blue-pokemon mb-2">
            Gotta catch 'em all!
          </h1>
          <SearchForm onClick={searchPokemon} />
        </div>
        <div></div>
      </div>
      <div className="pokemon-list p-4 pt-2 bg-white h-full overflow-y-auto">
        <SearchPokemon pokemonName={searchedPokemon} />
      </div>
    </div>
  );
}

export default SearchedPokemon;
