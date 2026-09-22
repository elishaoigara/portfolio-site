import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
test("opens the mobile disclosure and restores focus on Escape", () => {
  render(<Navbar />);
  const toggle = screen.getByRole("button", { name: "Open menu" });
  userEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  expect(
    screen.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: "Work" })[1]).toHaveFocus();
  userEvent.keyboard("{Escape}");
  expect(
    screen.queryByRole("navigation", { name: "Mobile navigation" }),
  ).not.toBeInTheDocument();
  expect(toggle).toHaveFocus();
});
