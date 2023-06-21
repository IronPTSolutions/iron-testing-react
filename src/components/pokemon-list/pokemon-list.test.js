import { render, screen, waitFor } from "@testing-library/react";
import PokemonList from "./pokemon-list";
import pokemonService from "../../services/pokemon-service";

describe("<PokemonList/>", () => {
  test("renders Loading... when pokemons is null", () => {
    // Given
    const mock = jest
      .spyOn(pokemonService, "getPokemons")
      .mockResolvedValue(null);

    // When
    render(<PokemonList />);

    // Then
    expect(mock).toHaveBeenCalled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });

  test("renders some pokemons", async () => {
    // Given
    const mock = jest
      .spyOn(pokemonService, "getPokemons")
      .mockResolvedValue([{ name: "Bulbasur" }, { name: "Charmander" }]);

    // When

    render(<PokemonList />);

    // Then

    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(mock).toHaveBeenCalled();
    expect(screen.getByText("Charmander")).toBeInTheDocument();
    expect(screen.getByText("Bulbasur")).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });
});
