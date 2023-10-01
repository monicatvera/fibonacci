import { fibonacci } from "../core/fibonacci";
describe('The fibonacci sequence', () => {
    it('yields value zero to number zero', () => {
      expect(fibonacci(0)).toBe(0);
    });
  });
