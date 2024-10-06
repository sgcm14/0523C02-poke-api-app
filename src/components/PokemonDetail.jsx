import { useParams } from "react-router-dom";
import Pokemon from "./Pokemon";

function PokemonDetail() {
  const { name } = useParams(); // Hook para obtener el nombre del Pokémon desde la URL

  return (
    <>
      <h2>Detalle de Pokémon</h2>
      <Pokemon pokemon={name} />{" "}
      {/* Mostramos el Pokémon con el nombre de la URL */}
    </>
  );
}
export default PokemonDetail;
