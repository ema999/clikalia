import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

test("show SearchBar", async () => {
  render(<SearchBar />, { wrapper: MemoryRouter });

  const textbox = screen.getByRole("textbox", { name: /search\.\.\./i });
  const placeholder = screen.getByText("Search...");

  fireEvent.change(textbox, {
    target: { value: "new value" },
  });
  expect(textbox.value).toBe("new value");

  expect(textbox).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
});

test("changing value of SearchBar", async () => {
  render(<SearchBar />, { wrapper: MemoryRouter });

  const textbox = screen.getByRole("textbox", { name: /search\.\.\./i });

  fireEvent.change(textbox, {
    target: { value: "new value" },
  });
  expect(textbox.value).toBe("new value");
});
