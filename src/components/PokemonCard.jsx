import React, { useState } from "react";
import PokemonCardExpanded from "./PokemonCardExpanded";
import { key } from "localforage";

const PokemonCard = ({ data, flag }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
        // Se mostraran todos los pokemones
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
              onClick={openModal}
            />
            <p className="text-center font-semibold text-lg">{pokemon.name}</p>
            <p className="text-center font-semibold text-lg">
              #{pokemon.url.split("/")[6]}
            </p>

            {/* Se valida si se presiono la imagen para desplegar tarjeta flotante */}
            {isModalOpen && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                onClick={handleBackgroundClick}
              >
                <PokemonCardExpanded
                  name={pokemon.name}
                  id={pokemon.url.split("/")[6]}
                />
                <button
                  className="absolute top-2 right-2 text-xl cursor-pointer"
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
            )}
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
            onClick={openModal}
          />
          <p className="text-center font-semibold text-lg">{data.name}</p>
          <p className="text-center font-semibold text-lg">#{data.id}</p>

          {isModalOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
              onClick={handleBackgroundClick}
            >
              <PokemonCardExpanded name={data.name} id={data.id} />
              <button
                className="absolute top-2 right-2 text-xl cursor-pointer"
                onClick={closeModal}
              >
                X
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PokemonCard;
