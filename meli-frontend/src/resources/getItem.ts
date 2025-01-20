import axios from "axios";
import { BACKEND_URL } from "../config/constants.config";
import { ItemResponse } from "../types/Item";

export function getItem(id: string) {
  return axios.get<ItemResponse>(`${BACKEND_URL}/api/items/${id}`);
}
