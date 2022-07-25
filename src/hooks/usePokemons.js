import { useState, useEffect, useCallback } from "react";
import { API_URL } from "const";
import axios from "axios";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pokemonsAdapter = useCallback((pokemons) => {
    return pokemons
      .map((pokemon) => ({
        ...pokemon,
        name: pokemon.name.toUpperCase(),
        id: pokemon.url.split("/").slice(-2)[0],
      }))
      .sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
  }, []);

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
  }, [pokemonsAdapter]);

  return { pokemons, loading, error };
};
