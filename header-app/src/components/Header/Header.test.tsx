import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./index";

describe("Header Component", () => {
  const mockChangeCartState = jest.fn();

  const renderHeader = (cartCount: number, showCart: boolean) => {
    render(
      <Header
        cartCount={cartCount}
        changeCartState={mockChangeCartState}
        showCart={showCart}
      />
    );
  };

  test("renders Header component", () => {
    renderHeader(0, false);
    expect(screen.getByAltText("white logo")).toBeInTheDocument();
    expect(screen.getByAltText("actions logo")).toBeInTheDocument();
  });

  test("calls changeCartState on button click", () => {
    renderHeader(0, false);
    fireEvent.click(screen.getByRole("button"));
    expect(mockChangeCartState).toHaveBeenCalled();
  });

  test("displays cart count when cartCount is greater than 0", () => {
    renderHeader(5, false);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("does display cart count when cartCount is 0", () => {
    renderHeader(0, false);
    expect(screen.queryByText("0")).toBeInTheDocument();
  });
});
