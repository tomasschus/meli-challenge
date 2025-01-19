import axios from "axios";
import { BACKEND_URL } from "../config/constants.config";
import { SearchProductResponse } from "../types/SearchProduct";

export function getProducts(id: string) {
  return axios.get<SearchProductResponse>(`${BACKEND_URL}/api/items/${id}`);
}
