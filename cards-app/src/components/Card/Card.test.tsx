import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./index"; // Adjust the import path as necessary

describe("Card Component", () => {
  const mockAddOnCart = jest.fn();

  const renderCard = (thumbnail: string) => {
    render(<Card thumbnail={thumbnail} addOnCart={mockAddOnCart} />);
  };

  test("renders Card component", () => {
    renderCard("test-thumbnail.jpg");
    expect(
      screen.getByRole("button", { name: /Adicionar ao carrinho/i })
    ).toBeInTheDocument();
  });

  test("calls addOnCart on button click", () => {
    renderCard("test-thumbnail.jpg");
    fireEvent.click(screen.getByRole("button", { name: /Adicionar ao carrinho/i }));
    expect(mockAddOnCart).toHaveBeenCalled();
  });
});
