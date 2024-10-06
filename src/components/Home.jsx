import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonAxios from "./PokemonAxios";

function Home() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate(); // Hook para redirigir
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSearch = () => {
      if (inputValue) {
        // Redirige a la nueva ruta con el nombre del Pokémon
        navigate(`/pokemon/${inputValue.toLowerCase()}`);
      }
    };
  
    return (
      <>
        <h1>Pokemones:</h1>
        <PokemonAxios />
        <h3>Encuentra un Pokémon específico:</h3>
        <input
          placeholder="Escribe su nombre"
          name="pokemon"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Buscar Pokémon</button>
      </>
    );
  }

  export default Home;