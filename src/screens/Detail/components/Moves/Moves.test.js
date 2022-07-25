import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Moves } from "./Moves";

const deleteMove = jest.fn(() => {
  return Promise.resolve();
});

beforeEach(() => {
  const moves = [
    {
      move: {
        name: "razor-wind",
        url: "https://pokeapi.co/api/v2/move/13/",
      },
    },
  ];
  render(<Moves moves={moves} deleteMove={deleteMove} />, {
    wrapper: MemoryRouter,
  });
});

test("show moves", async () => {
  const move = screen.getByText("RAZOR WIND");
  const deleteButtom = screen.getAllByRole("button", { name: /delete/i })[0];

  expect(move).toBeInTheDocument();
  expect(deleteButtom).toBeInTheDocument();
});

test("delete move", async () => {
  const deleteButtom = screen.getAllByRole("button", { name: /delete/i })[0];

  fireEvent.click(deleteButtom);
  expect(deleteMove).toHaveBeenCalled();
});
