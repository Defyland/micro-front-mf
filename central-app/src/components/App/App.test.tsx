import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { App } from './index';
import useStore from "../../store/useStore";
import { useProducts } from "../../data/services";

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = 'DynamicComponent';
  return DynamicComponent;
});

jest.mock("../../data/services", () => ({
  useProducts: jest.fn(),
}));

jest.mock("../../store/useStore", () => jest.fn());

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (useProducts as jest.Mock).mockReturnValue({
      getProducts: jest.fn().mockResolvedValue({ products: [{ id: 1, name: 'Test Product' }] }),
    });

    (useStore as jest.Mock).mockReturnValue({
      products: [],
      addProducts: jest.fn(),
      showCart: false,
      changeCartState: jest.fn(),
      cart: [],
    });
  });

  test('fetches products on initial render when products are empty', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(useProducts().getProducts).toHaveBeenCalledTimes(1);
    });

    expect(useStore().addProducts).toHaveBeenCalledWith([{ id: 1, name: 'Test Product' }]);
  });

  test('does not fetch products when products already exist', () => {
    (useStore as jest.Mock).mockReturnValue({
      products: [{ id: 1, name: 'Existing Product' }],
      addProducts: jest.fn(),
      showCart: false,
      changeCartState: jest.fn(),
      cart: [],
    });

    render(<App />);
    
    expect(useProducts().getProducts).not.toHaveBeenCalled();
    expect(useStore().addProducts).not.toHaveBeenCalled();
  });
});