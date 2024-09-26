import "@testing-library/jest-dom";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useProducts } from "./useProducts";
import { apiService } from "../config";

jest.mock("../config"); // Adjust the import path as necessary

describe("useProducts Hook", () => {
  const mockGet = jest.fn();

  beforeEach(() => {
    (apiService.get as jest.Mock) = mockGet;
  });

  test("fetches products data successfully", async () => {
    const productsData = { data: [{ id: 1, name: "Product 1", price: 100 }] };
    mockGet.mockResolvedValueOnce(productsData);

    const { result } = renderHook(() => useProducts());

    let products;
    await act(async () => {
      products = await result.current.getProducts();
    });

    await waitFor(() => {
      expect(mockGet).toHaveBeenCalledWith("/products");
      expect(products).toEqual(productsData.data);
    });
  });

  test("handles error when fetching products data", async () => {
    const errorMessage = "Network Error";
    mockGet.mockRejectedValueOnce(new Error(errorMessage));

    const { result } = renderHook(() => useProducts());

    let error;
    await act(async () => {
      try {
        await result.current.getProducts();
      } catch (e) {
        error = e;
      }
    });

    await waitFor(() => {
      expect(mockGet).toHaveBeenCalledWith("/products");
      expect(error).toEqual(new Error(errorMessage));
    });
  });
});
