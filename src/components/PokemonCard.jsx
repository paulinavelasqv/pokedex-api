import React, { useState } from "react";
import PokemonCardExpanded from "./PokemonCardExpanded";

const PokemonCard = ({ name, id, image }) => {
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
    <div className="pokemon-card border p-4 rounded-md shadow-md h-96 flex flex-col items-center bg-gray-100 relative">
      <img
        src={image}
        alt={name}
        className="mx-auto mb-2 mt-2 h-64 w-64 object-contain cursor-pointer"
        onClick={openModal}
      />
      <p className="text-center font-semibold text-lg">{name}</p>
      <p className="text-center font-semibold text-lg">#{id}</p>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleBackgroundClick}
        >
          <PokemonCardExpanded name={name} id={id} />
          <button
            className="absolute top-2 right-2 text-xl cursor-pointer"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
