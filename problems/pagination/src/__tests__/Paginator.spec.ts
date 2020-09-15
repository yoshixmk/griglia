import { paginate } from '../Paginator';

describe('Paginator', () => {
  it('tests', () => {
    expect(paginate({ min: 1, max: 10, current: 5, sight: 1 })).toBe('1 ... 4, 5, 6 ... 10');
    expect(paginate({ min: 1, max: 10, current: 5, sight: 2 })).toBe('1 ... 3, 4, 5, 6, 7 ... 10');
    expect(paginate({ min: 1, max: 10, current: 5, sight: 3 })).toBe('1, 2, 3, 4, 5, 6, 7, 8 ... 10');
    expect(paginate({ min: 1, max: 10, current: 5, sight: 4 })).toBe('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
    expect(paginate({ min: 1, max: 10, current: 5, sight: 5 })).toBe('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
    expect(paginate({ min: 1, max: 10, current: 5, sight: 6 })).toBe('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');

    expect(paginate({ min: 1, max: 10, current: 1, sight: 1 })).toBe('1, 2 ... 10');
    expect(paginate({ min: 1, max: 10, current: 2, sight: 1 })).toBe('1, 2, 3 ... 10');
    expect(paginate({ min: 1, max: 10, current: 3, sight: 1 })).toBe('1, 2, 3, 4 ... 10');
    expect(paginate({ min: 1, max: 10, current: 4, sight: 1 })).toBe('1 ... 3, 4, 5 ... 10');

    expect(paginate({ min: 1, max: 10, current: 10, sight: 1 })).toBe('1 ... 9, 10');
    expect(paginate({ min: 1, max: 10, current: 9, sight: 1 })).toBe('1 ... 8, 9, 10');
    expect(paginate({ min: 1, max: 10, current: 8, sight: 1 })).toBe('1 ... 7, 8, 9, 10');
    expect(paginate({ min: 1, max: 10, current: 7, sight: 1 })).toBe('1 ... 6, 7, 8 ... 10');

    expect(paginate({ min: -5, max: 5, current: 0, sight: 3 })).toBe('-5 ... -3, -2, -1, 0, 1, 2, 3 ... 5');
  });
});
