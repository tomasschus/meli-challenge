import axios from "axios";
import { BACKEND_URL } from "../config/constants.config";
import { SearchProductResponse } from "../types/SearchProduct";

export function getProducts(query: string) {
  return axios.get<SearchProductResponse>(
    `${BACKEND_URL}/api/items?q=${query}`
  );
}
