import React, { useState } from "react";
import PokemonCardExpanded from "./PokemonCardExpanded";

const PokemonCard = ({ data, flag }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const handleBackgroundClick = (e) => {
    // Cerrar la tarjeta flotante solo si se hace clic en el fondo oscuro
    if (e.target.classList.contains("bg-opacity-50")) {
      closeModal();
    }
  };

  return (
    <>
      {flag ? (
        // Se mostrarán todos los pokemones
        data.results.map((pokemon) => (
          <div
            key={pokemon.url}
            className="pokemon-card border p-4 rounded-md shadow-md h-96 flex flex-col items-center bg-gray-100 relative"
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                pokemon.url.split("/")[6]
              }.png`}
              alt={pokemon.name}
              className="mx-auto mb-2 mt-2 h-64 w-64 object-contain cursor-pointer"
              onClick={() => openModal(pokemon)}
            />
            <p className="text-center font-semibold text-lg">{pokemon.name}</p>
            <p className="text-center font-semibold text-lg">
              #{pokemon.url.split("/")[6]}
            </p>
          </div>
        ))
      ) : (
        <div
          key={data.id}
          className="pokemon-card border p-4 rounded-md shadow-md h-96 flex flex-col items-center bg-gray-100 relative"
        >
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="mx-auto mb-2 mt-2 h-64 w-64 object-contain cursor-pointer"
            onClick={() => openModal(data)}
          />
          <p className="text-center font-semibold text-lg">{data.name}</p>
          <p className="text-center font-semibold text-lg">#{data.id}</p>
        </div>
      )}

      {/* Se valida si se ha seleccionado un Pokémon para mostrar la tarjeta flotante */}
      {selectedPokemon && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            {" "}
            {/* Añade la clase relative */}
            <PokemonCardExpanded
              name={selectedPokemon.name}
              id={flag ? selectedPokemon.url.split("/")[6] : selectedPokemon.id}
            />
            <button
              className="absolute top-2 right-2 text-xl cursor-pointer text-black z-10"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
