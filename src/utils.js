export const filterPokemonsBySearch = (pokemons, searchTerm) => {
  return searchTerm
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pokemons;
};
