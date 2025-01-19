export const exchangeChars = (str: string, char1: string, char2: string) =>
  str
    .split(char1)
    .map((substr) => substr.replace(char2, char1))
    .join(char2);
