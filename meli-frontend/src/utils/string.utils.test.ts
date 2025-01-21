import { exchangeChars } from "./string.utils";

describe("exchangeChars", () => {
  it("should exchange two characters in a string", () => {
    expect(exchangeChars("abc", "a", "b")).toBe("bac");
    expect(exchangeChars("abc", "a", "c")).toBe("cba");
    expect(exchangeChars("abc", "b", "c")).toBe("acb");
    expect(exchangeChars("abc", "d", "e")).toBe("abc");
  });
});
