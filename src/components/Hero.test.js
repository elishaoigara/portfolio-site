import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
test("directs visitors to work and contact without a missing download", () => {
  render(<Hero />);
  expect(
    screen.getByRole("link", { name: /explore my work/i }),
  ).toHaveAttribute("href", "#projects");
  expect(
    screen.getByRole("link", { name: /let’s build something/i }),
  ).toHaveAttribute("href", "#contact");
});
