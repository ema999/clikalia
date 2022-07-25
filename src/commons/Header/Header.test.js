import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

test("show header with link and logo", async () => {
  render(<Header />, { wrapper: MemoryRouter });

  expect(screen.getByRole("link", { name: /logo/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /logo/i })).toHaveAttribute(
    "href",
    "/"
  );
  expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
});
