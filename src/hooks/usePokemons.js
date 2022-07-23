import { useState, useEffect } from "react";
import { API_URL } from "const";
import axios from "axios";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/pokemon?offset=0&limit=1154`
        );
        const pokemons = pokemonsAdapter(response.data.results);
        setPokemons(pokemons);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { pokemons, loading, error };
};

const pokemonsAdapter = (pokemons) => {
  return pokemons.map((pokemon) => ({
    ...pokemon,
    id: pokemon.url.split("/").slice(-2)[0],
  }));
};
