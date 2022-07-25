import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Detail } from "./Detail";
import { usePokemonDetail } from "hooks/usePokemonDetail";

jest.mock("hooks/usePokemonDetail");

beforeEach(() => {
  const detail = {
    abilities: [
      {
        ability: {
          name: "hydration",
          url: "https://pokeapi.co/api/v2/ability/93/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    base_experience: 173,
    forms: [
      {
        name: "accelgor",
        url: "https://pokeapi.co/api/v2/pokemon-form/617/",
      },
    ],
    id: 617,
    moves: [
      {
        move: {
          name: "body-slam",
          url: "https://pokeapi.co/api/v2/move/34/",
        },
      },
    ],
    name: "accelgor",
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    },
  };
  usePokemonDetail.mockImplementation(() => {
    return { detail, loading: false };
  });
});

test("show Detail show results", async () => {
  render(<Detail />, { wrapper: MemoryRouter });

  await waitFor(() => {
    expect(screen.getByTestId("PokeCard")).toBeInTheDocument();
  });
});
