import axios from "axios";
import { useEffect, useState } from "react";

const PokemonAxios = () => {
  const [loading, setLoading] = useState(true);
  // const url = "https://pokeapi.co/api/v2/pokemon-form/25/";
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const axiosData = async () => {
      let res = await axios(url);
      const pokemonDetails = await Promise.all(
        res.data.results.map(async (pokemon) => {
          let pokeDetails = await axios(pokemon.url); // Obtén los detalles de cada Pokémon
          return pokeDetails.data;
        })
      );
      setPokemon(pokemonDetails);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    axiosData();
  }, []);
  console.log("pokemon", pokemon);
  return (
    <div>
      {loading ? (
        "Cargando pokemón..."
      ) : (
        <div className="pokemon-list">
        {pokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Tipo: {pokemon.types[0].type.name}</p>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default PokemonAxios;
