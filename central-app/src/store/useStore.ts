import { create } from "zustand";

interface BearState {
  products: any[];
  addProducts: (products: any[]) => void;
}

export const useStore = create<BearState>((set) => ({
  products: [],
  addProducts: (products: any[]) => set(() => ({ products })),
}));

export default useStore;
