import { Price } from "./globals";

export interface SearchProductResponse {
  author: Author;
  categories: string[];
  items: SearchProduct[];
}

export interface Author {
  name: string;
  lastname: string;
}

export interface SearchProduct {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}
