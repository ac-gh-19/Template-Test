import { add, subtract } from './index.js';

describe('Math Functions', () => {
  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add mixed positive and negative numbers correctly', () => {
      expect(add(5, -3)).toBe(2);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should subtract negative numbers correctly', () => {
      expect(subtract(-2, -3)).toBe(1);
    });

    it('should subtract mixed positive and negative numbers correctly', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });
});
