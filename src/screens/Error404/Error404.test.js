import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Error404 } from "./Error404";

test("show Detail 404 screen", async () => {
  render(<Error404 />, { wrapper: MemoryRouter });

  const image = screen.getByRole("img", { name: /error/i });
  const goBack = screen.getByRole("link", { name: /go to home/i });

  expect(image).toBeInTheDocument();
  expect(goBack).toBeInTheDocument();
});
