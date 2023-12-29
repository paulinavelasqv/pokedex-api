import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from '../components/PokemonCard';

function SearchPokemon({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const flag = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
        setIsLoading(false);
        
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pokemonName]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!pokemonData) {
    return <p>No data available for {pokemonName}</p>;
  }


  return (
    <div id="listaPokemon" className="pokemon-list p-4 pt-8">
      {pokemonData && (
        <div className="flex justify-center items-center h-screen">
          <div className="pokemon-cards-container h-full">
            <PokemonCard
              key={pokemonData.id}
              data={pokemonData}
              flag={flag}
            />
          </div>
        </div>
      )}
    </div>
  );
  
}

export default SearchPokemon;
