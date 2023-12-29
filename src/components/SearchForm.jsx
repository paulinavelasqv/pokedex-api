import React, { useState } from "react";
import SearchIcon1 from "../images/search-icon1.png";
import { Link, useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to /pokemon/:searchTerm
    navigate(`/pokemon/${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form flex flex-row items-center"
    >
      <input
        className="pokemon-input px-4 py-2 border-2 border-black rounded-full mb-2 w-72"
        type="text"
        placeholder="Ex: Pikachu"
        value={searchTerm}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="search-button-container active:scale-95 rounded-full ml-4 py-2 px-3 font-primary bg-blue-pokemon border-2 border-yellow-pokemon text-yellow-pokemon">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
