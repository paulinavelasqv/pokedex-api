import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from '../components/PokemonCard';

function SearchPokemon({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemonName]);

  console.log('SearchPokemon.jsx ultimo Componente: ', pokemonData);

  return (
    <div id="listaPokemon" className="pokemon-list p-4 pt-8">
      {pokemonData && (
        <div className="flex justify-center items-center h-screen">
          <div className="pokemon-cards-container h-full">
            <PokemonCard
              key={pokemonData.name}
              name={pokemonData.name}
              id={pokemonData.id}
              image={pokemonData.sprites.other.dream_world.front_default}
            />
          </div>
        </div>
      )}
    </div>
  );
  
}

export default SearchPokemon;
