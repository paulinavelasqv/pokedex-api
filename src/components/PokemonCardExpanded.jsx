import React from "react";

const PokemonCardExpanded = ({ name, id }) => (
  <div className="bg-white p-4 rounded-md">
    <p>ID: {id}</p>
    <p>Name: {name}</p>
    {/* Otros detalles del Pokémon */}
  </div>
);

export default PokemonCardExpanded;
