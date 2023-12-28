import React from "react";

const PokemonCard = ({ name, id, image }) => (
  <div className="pokemon-card border p-4 rounded-md shadow-md h-96 flex flex-col items-center bg-gray-100">
    <img src={image} alt={name} className="mx-auto mb-2 mt-2 h-64 w-64 object-contain" />
    <p className="text-center font-semibold text-lg">{name}</p>
    <p className="text-center font-semibold text-lg">#{id}</p>
  </div>
);

export default PokemonCard;