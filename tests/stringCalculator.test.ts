import { StringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("Empty string should return 0", () => {
    const result = calculator.Add("");
    expect(result).toBe(0);
  });

  it("Single number should return the number itself", () => {
    const result = calculator.Add("1");
    expect(result).toBe(1);
  });

  it("Two numbers separated by comma", () => {
    const result = calculator.Add("1,2");
    expect(result).toBe(3);
  });

  it("Multiple numbers separated by comma", () => {
    const result = calculator.Add("1,2,3,4,5");
    expect(result).toBe(15);
  });

  it("Support newline as delimiter instead of comma", () => {
    const result = calculator.Add("1\n2,3");
    expect(result).toBe(6);
  });

  it("Support custom delimiter specified in the beginning of the string", () => {
    const result = calculator.Add("//;\n1;2");
    expect(result).toBe(3);
  });

  it.todo("Negative numbers should throw an exception");
  it.todo("Numbers greater than 1000 should be ignored in the sum calculation");
});
