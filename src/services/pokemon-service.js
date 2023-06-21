const pokemonService = {
  getPokemons: () =>
    fetch("https://pokeapi.co/api/v2/pokemons")
      .then((response) => response.json())
      .then((response) => response.results),
};

export default pokemonService;
