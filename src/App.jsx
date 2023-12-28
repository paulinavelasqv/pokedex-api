import React, { useState } from "react";
import PokemonLogo from "./images/pokemon-logo.png";
import SearchForm from "./components/SearchForm";
import Fondo from "./images/fondo.jpeg";
import PokemonList from "./components/PokemonList";

function App() {

  const [showPokemonList, setShowPokemonList] = useState(false);

  const handleScrollDown = () => {
    setShowPokemonList(true);
    document
      .getElementById("listaPokemon")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="App flex flex-col items-center justify-center h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div className="logo-contenedor">
        <img src={PokemonLogo} alt="pokemon-logo" className="h-40 mb-4" />
      </div>
      <h1 className="font-primary text-5xl mb-6 text-blue-pokemon">
        Gotta catch 'em all!
      </h1>
      <SearchForm />

      <button onClick={handleScrollDown} className="rounded-full bg-yellow-pokemon border border-black text-blue-pokemon py-2 px-6 font-primary mr-48 ml-6 mt-2 active:scale-95">
        See All Pokémons ➔
      </button>
      <div className={`pokemon-list p-4 pt-8 h-full ${showPokemonList ? 'bg-white' : ''}`}>
        <PokemonList isVisible={showPokemonList} />
      </div>
        

      

    </div>
  );
}

export default App;
