import { StringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeAll(() => {
    calculator = new StringCalculator();
  });

  afterAll(() => {
    calculator = null!;
  });

  it("Empty string should return 0", () => {
    const result = calculator.evaluate("");
    expect(result).toBe(0);
  });

  it("Single number should return the number itself", () => {
    const result = calculator.evaluate("1");
    expect(result).toBe(1);
  });

  it("Two numbers separated by comma", () => {
    const result = calculator.evaluate("1,2");
    expect(result).toBe(3);
  });

  it("Multiple numbers separated by comma", () => {
    const result = calculator.evaluate("1,2,3,4,5");
    expect(result).toBe(15);
  });

  it("Support newline as delimiter instead of comma", () => {
    const result = calculator.evaluate("1\n2,3");
    expect(result).toBe(6);
  });

  it("Support custom delimiter specified in the beginning of the string", () => {
    const result = calculator.evaluate("//;\n1;2");
    expect(result).toBe(3);
  });

  it("Negative numbers should throw an exception", () => {
    const result = () => calculator.evaluate("1,-2,3,-4");
    expect(result).toThrow(`Negatives not allowed: -2, -4`);
  });

  it("Numbers greater than 1000 should be ignored in the sum calculation", () => {
    const result = calculator.evaluate("2,1001");
    expect(result).toBe(2);
  });

  it("Support delimiters of any length", () => {
    const result = calculator.evaluate("//[***]\n1***2***3");
    expect(result).toBe(6);
  });

  it("Support multiple delimiters", () => {
    const result = calculator.evaluate("//[*][%]\n1*2%3");
    expect(result).toBe(6);
  });

  it("Support multiple delimiters with any length", () => {
    const result = calculator.evaluate("//[**][%%]\n1**2%%3");
    expect(result).toBe(6);
  });

  it("Support Multiplication when * custom delimiter", () => {
    const result = calculator.evaluate("//*\n2*3*4");
    expect(result).toBe(24);
  });
});
