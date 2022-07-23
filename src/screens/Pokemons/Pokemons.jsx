import { useCallback, useState, useMemo } from "react";
import { Header, SearchBar } from "commons";
import { List } from "./components";
import { usePokemons } from "hooks";
import { filterPokemonsBySearch } from "utils";
import Container from "@mui/material/Container";

export const Pokemons = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { pokemons, loading } = usePokemons();

  const pokemonsBySearchTerm = useMemo(() => {
    return filterPokemonsBySearch(pokemons, searchTerm);
  }, [pokemons, searchTerm]);

  const onSearchBoxChange = useCallback(
    (searchTerm) => {
      setSearchTerm(searchTerm);
    },
    [setSearchTerm]
  );
  return (
    <div className="Pokemons">
      <Header />
      <Container maxWidth="md">
        <SearchBar className="searchBar" handleChange={onSearchBoxChange} />
        <List pokemons={pokemonsBySearchTerm} loading={loading} />
      </Container>
    </div>
  );
};
