import "@testing-library/jest-dom";
import useStore from "./useStore";
import { renderHook, act } from "@testing-library/react";

describe("useStore Hook", () => {
  test("initial state", () => {
    const { result } = renderHook(() => useStore());
    expect(result.current.products).toEqual([]);
    expect(result.current.cart).toEqual([]);
    expect(result.current.showCart).toBe(false);
  });

  test("changeCartState toggles showCart", () => {
    const { result } = renderHook(() => useStore());
    act(() => {
      result.current.changeCartState();
    });
    expect(result.current.showCart).toBe(true);

    act(() => {
      result.current.changeCartState();
    });
    expect(result.current.showCart).toBe(false);
  });

  test("selectedProducts adds product to cart", () => {
    const { result } = renderHook(() => useStore());
    const product = { id: 1, title: "Product 1", price: 100 };

    act(() => {
      result.current.selectedProducts(product);
    });
    expect(result.current.cart).toEqual([product]);
  });

  test("addProducts sets products", () => {
    const { result } = renderHook(() => useStore());
    const products = [
      { id: 1, title: "Product 1", price: 100 },
      { id: 2, title: "Product 2", price: 200 },
    ];

    act(() => {
      result.current.addProducts(products);
    });
    expect(result.current.products).toEqual(products);
  });
});
