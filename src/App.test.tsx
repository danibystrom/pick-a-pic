import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("should filter photos based on category-clicks", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Nature"));
    expect(screen.getAllByAltText("Nature").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByText("City"));
    expect(screen.getAllByAltText("City").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByText("All"));
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
});
