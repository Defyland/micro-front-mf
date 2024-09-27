import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./index";

describe("Card Component", () => {
  const mockAddOnCart = jest.fn();
  const defaultProps = {
    thumbnail: "test-thumbnail.jpg",
    price: 19.99,
    title: "Test Product",
    addOnCart: mockAddOnCart,
  };

  const renderCard = (props = {}) => {
    render(<Card {...defaultProps} {...props} />);
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

  test("displays correct title", () => {
    renderCard();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("displays correct price", () => {
    renderCard();
    expect(screen.getByText("R$: 19.99")).toBeInTheDocument();
  });

  test("displays quantity badge when quantity is provided", () => {
    renderCard({ quantity: 3 });
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("does not display quantity badge when quantity is not provided", () => {
    renderCard();
    expect(screen.queryByText(/^\d+$/)).not.toBeInTheDocument();
  });

  test("renders thumbnail with correct src and alt attributes", () => {
    renderCard();
    const thumbnail = screen.getByAltText("Test Product") as HTMLImageElement;
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail.src).toContain("test-thumbnail.jpg");
  });

  test("has correct data-testid attribute", () => {
    renderCard();
    expect(screen.getByTestId("Test Product")).toBeInTheDocument();
  });
});
