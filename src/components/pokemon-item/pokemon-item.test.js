import { render, screen } from "@testing-library/react";
import PokemonItem from "./pokemon-item";

describe("<PokemonItem/>", () => {
  test("happy case", () => {
    // Given
    const name = "Bulbasur";

    // When
    render(<PokemonItem name={name} />);

    // Then
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });
});
