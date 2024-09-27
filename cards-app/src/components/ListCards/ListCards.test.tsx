import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ListCards from "./index";
import { ListCardsProps, ProductOptions } from "../../../../global/entities";

describe("ListCards Component", () => {
  const mockSelectedProducts = jest.fn();
  const mockChangeCartState = jest.fn();

  const mockProducts: ProductOptions[] = [
    { id: 1, title: "Product 1", price: 100, thumbnail: "thumbnail1.jpg" },
    { id: 2, title: "Product 2", price: 200, thumbnail: "thumbnail2.jpg" },
  ];

  const mockProductsStore: ListCardsProps["productsStore"] = {
    products: mockProducts,
    selectedProducts: mockSelectedProducts,
    cart: [
      { id: 1, title: "Product 1", price: 100, thumbnail: "thumbnail1.jpg" },
      { id: 1, title: "Product 1", price: 100, thumbnail: "thumbnail1.jpg" },
      { id: 2, title: "Product 2", price: 200, thumbnail: "thumbnail2.jpg" },
    ],
    showCart: false,
    changeCartState: mockChangeCartState,
  };

  const renderListCards = (productsStore: ListCardsProps["productsStore"] = mockProductsStore) => {
    render(<ListCards productsStore={productsStore} />);
  };

  test("renders ListCards component with correct products", () => {
    renderListCards();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  test("displays correct product information and quantity", () => {
    renderListCards();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getAllByText("2")).toHaveLength(1);
    expect(screen.getAllByText("1")).toHaveLength(1);
  });

  test("clicking Add to Cart button calls selectedProducts", () => {
    renderListCards();
    const addButtons = screen.getAllByRole("button", { name: /adicionar ao carrinho/i });
    fireEvent.click(addButtons[0]);
    expect(mockSelectedProducts).toHaveBeenCalledWith(mockProducts[0]);
  });

  test("displays cart modal when showCart is true", () => {
    renderListCards({ ...mockProductsStore, showCart: true });
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  test("displays correct items in cart modal with quantities", () => {
    renderListCards({ ...mockProductsStore, showCart: true });
    expect(screen.getAllByText("Product 1")).toHaveLength(2);
    expect(screen.getAllByText("Product 2")).toHaveLength(2);
    expect(screen.getByText("Qt: 2")).toBeInTheDocument();
    expect(screen.getByText("Qt: 1")).toBeInTheDocument();
  });

  test("displays correct total in cart modal", () => {
    renderListCards({ ...mockProductsStore, showCart: true });
    expect(screen.getByText("Total de itens: 3")).toBeInTheDocument();
    expect(screen.getByText("Valor total: R$ 400.00")).toBeInTheDocument();
  });

  test("displays empty cart message and image when cart is empty", () => {
    renderListCards({ ...mockProductsStore, showCart: true, cart: [] });
    expect(screen.getByText("Você ainda não tem produtos :(")).toBeInTheDocument();
    expect(screen.getByAltText("Empty cart")).toBeInTheDocument();
  });

  test("close button in cart modal calls changeCartState", () => {
    renderListCards({ ...mockProductsStore, showCart: true });
    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockChangeCartState).toHaveBeenCalled();
  });
});