import { subtract } from '../index.js';

describe('src/__tests__ folder', () => {
  describe('subtract function from src/__tests__', () => {
    it('should work from __tests__ folder inside src', () => {
      expect(subtract(20, 10)).toBe(10);
    });

    it('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });
});
