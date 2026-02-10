import { add } from '../src/index.js';

describe('Root __tests__ folder', () => {
  describe('add function from root __tests__', () => {
    it('should work from __tests__ folder at root', () => {
      expect(add(10, 20)).toBe(30);
    });

    it('should handle zero correctly', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });
});
