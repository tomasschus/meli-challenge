import { Currency } from "../utils/money.utils";

export interface Price {
  currency: Currency;
  amount: number;
  decimals: number;
}
