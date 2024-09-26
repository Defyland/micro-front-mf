import { create } from "zustand";
import { apiService } from "../config";
import { CartStore } from "../../../../global/entities";

export const useCart = create<CartStore>((set, get) => ({
  cart: null,
  isLoading: false,
  error: null,

  addToCart: async (productId: number, quantity: number) => {
    set({ isLoading: true, error: null });
    try {
      const currentCart = get().cart;
      if (!currentCart) {
        const response = await apiService.post("/carts/add", {
          userId: 1,
          products: [{ id: productId, quantity }]
        });
        set({ cart: response.data });
      } else {
        const response = await apiService.post(`/carts/${currentCart.id}/products/add`, {
          productId,
          quantity
        });
        set({ cart: response.data });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: "Failed to add item to cart" });
    } finally {
      set({ isLoading: false });
    }
  },

  removeFromCart: async (productId: number) => {
    set({ isLoading: true, error: null });
    try {
      const currentCart = get().cart;
      if (currentCart) {
        const response = await apiService.delete(`/carts/${currentCart.id}/products/${productId}`);
        set({ cart: response.data });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: "Failed to remove item from cart" });
    } finally {
      set({ isLoading: false });
    }
  },

  updateQuantity: async (productId: number, quantity: number) => {
    set({ isLoading: true, error: null });
    try {
      const currentCart = get().cart;
      if (currentCart) {
        const response = await apiService.patch(`/carts/${currentCart.id}`, {
          products: [{ id: productId, quantity }]
        });
        set({ cart: response.data });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: "Failed to update item quantity" });
    } finally {
      set({ isLoading: false });
    }
  },
}));