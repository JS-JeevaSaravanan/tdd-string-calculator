import { primeFactors } from "../src/primeFactors";

describe("Prime Factors", () => {
  it("Prime factors of 1 should be an empty array", () => {
    const result = primeFactors(1);
    expect(result).toEqual([]);
  });

  it("Prime factors of 2 should be [2]", () => {
    const result = primeFactors(2);
    expect(result).toEqual([2]);
  });

  it("Prime factors of 3 should be [3]", () => {
    const result = primeFactors(3);
    expect(result).toEqual([3]);
  });

  it("Prime factors of 4 should be [2, 2]", () => {
    const result = primeFactors(4);
    expect(result).toEqual([2, 2]);
  });
});
