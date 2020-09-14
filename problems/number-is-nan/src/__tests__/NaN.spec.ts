import { nan } from '../NaN';

describe('nan', () => {
  it('tests', () => {
    expect(nan(undefined)).toBe(false);
    expect(nan(null)).toBe(false);
    expect(nan(false)).toBe(false);
    expect(nan(false)).toBe(false);
    expect(nan(1)).toBe(false);
    expect(nan(0)).toBe(false);
    expect(nan(-0)).toBe(false);
    expect(nan(-1)).toBe(false);
    expect(nan(1.1)).toBe(false);
    expect(nan(-1.01)).toBe(false);
    expect(nan(Infinity)).toBe(false);
    expect(nan(-Infinity)).toBe(false);
    expect(nan(NaN)).toBe(true);
    expect(nan('')).toBe(false);
    expect(nan('i')).toBe(false);
    expect(nan('io non parlo mentre mangio')).toBe(false);
    expect(nan(Symbol())).toBe(false);
    expect(nan(1n)).toBe(false);
    expect(nan(0n)).toBe(false);
    expect(nan(-0n)).toBe(false);
    expect(nan(-1n)).toBe(false);
    expect(nan({})).toBe(false);
    expect(nan({
      [1]: NaN
    })).toBe(false);
    expect(nan({
      [1]: NaN,
      [2]: NaN
    })).toBe(false);
    expect(nan({
      o: NaN
    })).toBe(false);
    expect(nan({
      o: NaN,
      b: NaN
    })).toBe(false);
    expect(nan([])).toBe(false);
    expect(nan([
      NaN
    ])).toBe(false);
    expect(nan([
      NaN,
      NaN
    ])).toBe(false);
  });
});
