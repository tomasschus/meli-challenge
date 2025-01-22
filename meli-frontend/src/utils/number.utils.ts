export const applyDecimalScale = (
  number: number | string,
  decimalScale: number,
): [string, string] => {
  const numberAsNumber =
    typeof number === "string" ? parseFloat(number) : number;
  if (isNaN(numberAsNumber)) {
    throw new Error("Invalid number");
  }
  const sign = numberAsNumber < 0 ? "-" : "";
  const numberParts = Math.abs(numberAsNumber).toString().split(".");
  const joinedNumberParts = numberParts.join("");
  const pointIndex = Math.max(0, numberParts[0]!.length - decimalScale);
  const integerPart =
    joinedNumberParts.slice(0, pointIndex) +
      (pointIndex > joinedNumberParts.length
        ? "0".repeat(pointIndex - joinedNumberParts.length)
        : "") || "0";
  const decimalPart = joinedNumberParts
    .slice(pointIndex)
    .padStart(decimalScale, "0");
  return [sign + integerPart, decimalPart];
};
