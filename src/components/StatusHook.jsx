import { useEffect, useState, useCallback } from "react";

// Creamos un objeto para almacenar
// los posibles estados
export const statuses = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

export const useFetch = (url) => {
  // Almacenamos el estado del request y
  // la información proveniente de la API
  // en dos estados dentro del Hook personalizado
  // Inicialmente, nuestro estado será "Cargando"
  const [status, setStatus] = useState(statuses.LOADING);
  const [data, setData] = useState();

  // Creamos una función asincrónica para
  // obtener la información de la API
  const fetchData = useCallback(async () => {
    // Seteamos el estado "Cargando" nuevamente.
    // Esto es útil en caso de que cambie la URL
    // en algún momento y se vuelva a realizar el request
    setStatus(statuses.LOADING);

    try {
      const response = await fetch(url);

      // En caso de que la respuesta no sea
      // satisfactoria, arrojamos un error
      if (!response.ok) throw new Error("Request Error");

      const json = await response.json();

      // Si todo salió bien, guardamos la información
      // y actualizamos el estado del request
      setData(json);
      setStatus(statuses.SUCCESS);
    } catch (error) {
      // En caso de error, almacenamos dicho estado
      // para poder retornarlo y utilizarlo en el componente
      setStatus(statuses.ERROR);
    }
  }, [url]);
  // Disparamos la función cada vez que se actualice la URL
  // La URL está como dependencia del useCallback, lo que
  // va a actualizar dicha función (y por ende disparar el useEffect)
  // en caso de que cambie la misma
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Retornamos los dos estados de nuestro Hook para poder
  // utilizarlo en el componente
  return { data, status };
};
