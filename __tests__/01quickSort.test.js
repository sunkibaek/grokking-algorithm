const quickSort = require("../src/01quickSort");

describe("quickSort", () => {
  describe("with empty list", () => {
    it("returns an empty list", () => {
      const result = quickSort([]);

      expect(result).toEqual([]);
    });
  });

  describe("with one elemnt", () => {
    it("returns the list", () => {
      const result = quickSort([1]);

      expect(result).toEqual([1]);
    });
  });

  describe("with two elemnts", () => {
    it("returns a sorted list", () => {
      const result = quickSort([2, 1]);

      expect(result).toEqual([1, 2]);
    });
  });

  describe("with three elemnts", () => {
    it("returns a sorted list", () => {
      const result = quickSort([2, 3, 1]);

      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe("with multiple elements", () => {
    it("returns a sorted list", () => {
      const result = quickSort([2, 6, 3, 4, 5, 1]);

      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
