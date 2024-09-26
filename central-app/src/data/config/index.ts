import axios from "axios";

export const apiService = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});
