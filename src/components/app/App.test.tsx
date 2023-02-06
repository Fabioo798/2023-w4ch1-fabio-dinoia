import { render, screen } from "@testing-library/react";
import App from "./App";

test("render the title and an element", () => {
  render(<App />);
  const linkElement = screen.getByText(/The pointing gentlemen/i);
  expect(linkElement).toBeInTheDocument();
});

test("render the title and and main", () => {
  render(<App />);
  const linkElement1 = screen.getByTitle("container");
  expect(linkElement1).toBeInTheDocument();
});
