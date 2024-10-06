import { statuses, useFetch } from "./StatusHook";

// Recibimos el nombre del Pokémon como "prop"
export default function Pokemon({ pokemon }) {
  // Utilizamos nuestro Hook personalizado, pasándole una URL
  // construida dinámicamente con el nombre del pokemon
  const { data, status } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  // Dependiendo del estado de la petición, damos feedback
  // visual a la persona
  if (status === statuses.LOADING) return <p>Cargando...</p>;
  if (status === statuses.ERROR)
    return <p>Ha ocurrido un error al obtener el pokemon</p>;

  // Una vez que tenemos la información, la renderizamos en la pantalla
  return (
    <div className="pokemonCard">
      <img src={data.sprites.front_default} alt={data.name} />
      <h3>{data.name}</h3>
    </div>
  );
}
