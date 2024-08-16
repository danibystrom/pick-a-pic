import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PhotoFilter from "./PhotoFilter";

describe("PhotoFilter", () => {
  it("should render a list of buttons", () => {
    render(<PhotoFilter onFilterChange={() => {}} />);
    const buttonTexts = [
      "Nature",
      "City",
      "Black & White",
      "People",
      "Food",
      "Sports",
      "Animals",
      "Ilustrations",
      "Health & Wellnes",
      "All",
    ];
    buttonTexts.forEach((text) => {
      const button = screen.getByText(text);
      expect(button).toBeInTheDocument();
    });
  });
});
