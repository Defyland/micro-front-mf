import { apiService } from "../config";

export const useProducts = () => {
  const getProducts = async () => {
    const response = await apiService.get("/products");
    return response.data;
  };

  return { getProducts };
};
