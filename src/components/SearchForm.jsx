import React, { useState } from "react";
import SearchIcon1 from "../images/search-icon1.png";
import { useLocation, Link } from "react-router-dom";

function SearchForm() {

  return (
    <form className="search-form flex flex-row items-center">
      <input
        className="pokemon-input px-4 py-2 border-2 border-black rounded-full mb-2 w-72"
        type="text"
        placeholder="Ex: Pikachu"
        name="pokemon"
      />
      <Link to='/pokemon/pokemon'>
        <div className="search-button-container active:scale-95">
          <img
            className="h-12 ml-2 cursor-pointer transition"
            src={SearchIcon1}
            alt="search icon 1"
          />
        </div>
      </Link>
      
    </form>
  );
}

export default SearchForm;
