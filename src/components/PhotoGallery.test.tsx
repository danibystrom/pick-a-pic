import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { photos } from "../data/data";
import PhotoGallery from "./PhotoGallery";

describe("PhotoGallery", () => {
  it("should display correct number of photos med 'All' is selected", () => {
    render(<PhotoGallery filter="All" />);
    expect(screen.getAllByRole("img").length).toBe(photos.length);
  });

  it("should display correct number of photos when a category is selected", () => {
    render(<PhotoGallery filter="Nature" />);
    const naturePhotos = photos.filter((photo) => photo.category === "Nature");
    expect(screen.getAllByRole("img").length).toBe(naturePhotos.length);
  });
});
