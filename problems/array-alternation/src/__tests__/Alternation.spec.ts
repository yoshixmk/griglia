import { alternate } from '../Alternation';

describe('Alternation', () => {
  describe('basic one', () => {
    it('ordinary case', () => {
      expect.assertions(1);

      const arr1: Array<number> = [1, 3, 5];
      const arr2: Array<number> = [2, 4, 6];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('arr2 is shorter than arr1', () => {
    it('ordinary case', () => {
      expect.assertions(1);

      const arr1: Array<number> = [1, 3, 5];
      const arr2: Array<number> = [2, 4];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('even shorter', () => {
      expect.assertions(1);

      const arr1: Array<number> = [1, 3, 5];
      const arr2: Array<number> = [0];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([1, 0, 3, 5]);
    });

    it('arr2 has no elements', () => {
      expect.assertions(1);

      const arr1: Array<number> = [1, 3, 5];
      const arr2: Array<number> = [];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([1, 3, 5]);
    });
  });

  describe('arr1 is shorter than arr2', () => {
    it('even shorter', () => {
      expect.assertions(1);

      const arr1: Array<number> = [3];
      const arr2: Array<number> = [2, 4, 6];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([3, 2, 4, 6]);
    });

    it('arr2 has no elements', () => {
      expect.assertions(1);

      const arr1: Array<number> = [];
      const arr2: Array<number> = [2, 4, 6];

      expect(alternate<number>(arr1, arr2)).toStrictEqual([2, 4, 6]);
    });
  });
});
