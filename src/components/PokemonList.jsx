import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { useLocation } from "react-router-dom";

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [id, setId] = useState(null);
  const allPokemon = true;
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (location.pathname.includes("/pokemon/all")) {
          const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/"
          );
          setPokemonData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location.pathname]);

  const obtenerId = () => {
    pokemonData.results.map((pokemon) => {
      setId(pokemon.url.split("/")[6]);
    });
  };

  obtenerId;

  return (
    <div id="listaPokemon" className="pokemon-list p-4 pt-8">
      {pokemonData && (
        <div className="pokemon-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-full gap-4">
          {<PokemonCard key={id} data={pokemonData} flag={allPokemon} />}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
