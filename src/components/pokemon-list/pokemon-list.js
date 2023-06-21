import { useEffect, useState } from "react";
import pokemonService from "../../services/pokemon-service";
import PokemonItem from "../pokemon-item/pokemon-item";

function PokemonList() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    pokemonService.getPokemons().then(setPokemons);
  }, []);

  if (pokemons === null) {
    return <div>Loading...</div>;
  }

  return (
    <div id="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
