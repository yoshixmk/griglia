import { alternate } from '../Alternation';

describe('Alternation', () => {
  it('all in one', () => {
    expect.assertions(9);

    expect(alternate<number>(
      [1, 3, 5]
    )).toStrictEqual([1, 2, 3, 4, 5, 6]);

    expect(alternate<number>(
      [1, 3, 5],
      [2, 4, 6]
    )).toStrictEqual([1, 2, 3, 4, 5, 6]);

    expect(alternate<number>(
      [1, 3, 5],
      [2, 4]
    )).toStrictEqual([1, 2, 3, 4, 5]);

    expect(alternate<number>(
      [1, 3, 5],
      [0]
    )).toStrictEqual([1, 0, 3, 5]);

    expect(alternate<number>(
      [1, 3, 5],
      []
    )).toStrictEqual([1, 3, 5]);

    expect(alternate<number>(
      [3],
      [2, 4, 6]
    )).toStrictEqual([3, 2, 4, 6]);

    expect(alternate<number>(
      [],
      [2, 4, 6]
    )).toStrictEqual([2, 4, 6]);

    expect(alternate<number>(
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    )).toStrictEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);

    expect(alternate<number>(
      [1],
      [4, 5, 6],
      [],
      [8, 9]
    )).toStrictEqual([1, 4, 8, 5, 9, 6]);
  });
});
