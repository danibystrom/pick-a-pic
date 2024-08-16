



import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import PhotoGallery from "./components/PhotoGallery";
import { photos } from "./data/data";

describe("App", () => {
  it("should filter photos based on category-clicks", () => {
    render(<App />);

    const natureButton = screen.getByText("Nature");
    fireEvent.click(natureButton);

    const naturePhotos = photos.filter((photo) => photo.category === "Nature");
    let displayedPhotos = screen.getAllByRole("img");

    expect(displayedPhotos.length).toBe(naturePhotos.length);

    displayedPhotos.forEach((img) => {
      expect(img).toHaveAttribute("alt", expect.stringMatching(/^Nature \d+$/));
      expect(img).not.toHaveAttribute("alt", "City");
    });

    const cityButton = screen.getByText("City");
    fireEvent.click(cityButton);

    const cityPhotos = photos.filter((photo) => photo.category === "City");
    displayedPhotos = screen.getAllByRole("img");

    expect(displayedPhotos.length).toBe(cityPhotos.length);

    displayedPhotos.forEach((img) => {
      expect(img).toHaveAttribute("alt", expect.stringMatching(/^City \d+$/));
      expect(img).not.toHaveAttribute("alt", "Food");
    });
  });

  it("should open modal and display correct image when an image is clicked", () => {
    render(<PhotoGallery filter="All" />);
    const { url, alt } = photos[0];

    const imgElement = screen.getByAltText(alt);
    fireEvent.click(imgElement);

    const modalImgElement = screen.getByAltText("Selected");
    expect(modalImgElement).toBeInTheDocument();
    expect(modalImgElement).toHaveAttribute("src", url);
  });
});






