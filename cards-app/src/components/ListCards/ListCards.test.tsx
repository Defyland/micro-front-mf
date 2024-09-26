import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ListCards from "./index";
import { ListCardsProps } from "../../../../global/entities";

describe("ListCards Component", () => {
  const mockChangeCartState = jest.fn();

  const mockProductsStore = {
    products: [
      { id: 1, title: "Product 1", price: 100 },
      { id: 2, title: "Product 2", price: 200 },
    ],
    selectedProducts: [],
    cart: [
      { id: 1, title: "Product 1", price: 100 },
      { id: 1, title: "Product 1", price: 100 },
      { id: 2, title: "Product 2", price: 200 },
    ],
    showCart: false,
    changeCartState: mockChangeCartState,
  };

  const mockProductsStoreWithShowCart = {
    ...mockProductsStore,
    showCart: true,
  };

  const renderListCards = (productsStore: ListCardsProps["productsStore"]) => {
    render(<ListCards productsStore={productsStore} />);
  };

  test("renders ListCards component", () => {
    renderListCards(mockProductsStore);
    expect(screen.getByTestId("Product 1")).toBeInTheDocument();
    expect(screen.getByTestId("Product 2")).toBeInTheDocument();
  });

  test("renders Card components based on products array", () => {
    renderListCards(mockProductsStoreWithShowCart);
    expect(screen.getAllByText(/Product/)).toHaveLength(2);
  });
});
