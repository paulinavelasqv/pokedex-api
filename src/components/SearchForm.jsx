import React, { useState } from "react";
import SearchIcon1 from "../images/search-icon1.png";
import { Link } from "react-router-dom";



function SearchForm(props) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const pokemonDetails = {
      texto: input
    }

    console.log('SearchedPOkemonPage: ', pokemonDetails);
    props.onClick(pokemonDetails);
  };

  return (
    <form className="search-form flex flex-row items-center">
      <input
        className="pokemon-input px-4 py-2 border-2 border-black rounded-full mb-2 w-72"
        type="text"
        placeholder="Ex: Pikachu"
        name="pokemon"
        onChange={handleInputChange}
      />
      <Link to='/pokemon/'>
      <div className="search-button-container active:scale-95 rounded-full bg-yellow-pokemon border border-black text-blue-pokemon" >
        <button onClick={handleSend}>
          Buscar
        </button>
        </div>
        {/* <div className="search-button-container active:scale-95" onSubmit={handleSend}>
          <img
            className="h-12 ml-2 cursor-pointer transition"
            src={SearchIcon1}
            alt="search icon 1"
          />
        </div> */}
      </Link>
      
    </form>
  );
}

export default SearchForm;
