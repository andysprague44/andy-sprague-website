import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navigation from "@/components/Navigation";

const renderNav = (path = "/") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Navigation />
    </MemoryRouter>,
  );

describe("Navigation", () => {
  it("renders all nav links", () => {
    renderNav();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the site logo", () => {
    renderNav();
    expect(screen.getByText("Andy Sprague")).toBeInTheDocument();
  });

  it("logo links to home", () => {
    renderNav();
    const logo = screen.getByText("Andy Sprague").closest("a");
    expect(logo).toHaveAttribute("href", "/");
  });
});
