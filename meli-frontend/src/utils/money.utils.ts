import { applyDecimalScale } from "./number.utils";
import { exchangeChars } from "./string.utils";

export enum Currency {
  ARS = "ARS",
  USD = "USD",
}

export const formatMoney = (
  amount: number | string,
  {
    currency = Currency.ARS,
    inputDecimalScale = 2,
    decimalScale = 2,
    locale = "es-AR",
    swapDelimiters = false,
  }: Partial<{
    currency: Currency | null;
    inputDecimalScale: number;
    decimalScale: number;
    locale: string;
    swapDelimiters: boolean;
  }> = {},
) => {
  let amountToFormat = typeof amount === "string" ? parseFloat(amount) : amount;
  if (inputDecimalScale !== 0) {
    const [integerPart, decimalPart] = applyDecimalScale(
      amountToFormat,
      inputDecimalScale,
    );
    amountToFormat = parseFloat(
      integerPart + (decimalPart ? `.${decimalPart}` : ""),
    );
  }
  const numberFormat =
    currency !== null
      ? new Intl.NumberFormat(locale, {
          style: "currency",
          currency,
          minimumFractionDigits: decimalScale,
          maximumFractionDigits: decimalScale,
        })
      : new Intl.NumberFormat(locale, {
          style: "decimal",
          minimumFractionDigits: decimalScale,
          maximumFractionDigits: decimalScale,
        });
  const formattedAmount = numberFormat.format(amountToFormat);
  return swapDelimiters
    ? exchangeChars(formattedAmount, ".", ",")
    : formattedAmount;
};
