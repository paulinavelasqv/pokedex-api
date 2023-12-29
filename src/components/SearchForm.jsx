import React, { useState } from "react";
import SearchIcon1 from "../images/search-icon1.png";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Llama a la función onSearch del componente padre y pasa el término de búsqueda
    onSearch(searchTerm);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="search-form flex flex-row items-center"
    >
      <input
        className="pokemon-input px-4 py-2 border-2 border-black rounded-full mb-2 w-72"
        type="text"
        placeholder="Ex: Pikachu"
        name="pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-button-container active:scale-95">
        <img
          className="h-12 ml-2 cursor-pointer transition"
          src={SearchIcon1}
          alt="search icon 1"
        />
      </div>
    </form>
  );
}

export default SearchForm;
