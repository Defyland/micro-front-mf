import { create } from "zustand";
import { ProductOptions, ProductState } from "../../../global/entities";

export const useStore = create<ProductState>((set) => ({
  products: [],
  cart: [],
  showCart: false,
  changeCartState: () => set((state) => ({ showCart: !state.showCart })),
  selectedProducts: (product: ProductOptions) =>
    set((state) => ({ cart: [...state.cart, product] })),
  addProducts: (products: ProductOptions[]) => set(() => ({ products })),
}));

export default useStore;
