import { add } from "../../add";

describe("index", () => {
  it("should return the correct value", () => {
    expect(add(1, 2)).toBe(3);
  });
});
