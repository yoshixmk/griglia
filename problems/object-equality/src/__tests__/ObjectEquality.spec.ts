import { same } from '../ObjectEquality';

describe('ObjectEquality', () => {
  it('tests', () => {
    expect(same([], [])).toBe(true);
    expect(same([], ['i'])).toBe(false);
    expect(same([], [[]])).toBe(false);
    expect(same([], [[], []])).toBe(false);
    expect(same([[]], [[]])).toBe(true);
    expect(same([[]], [[], []])).toBe(false);
    expect(same([], [{}])).toBe(false);
    expect(same([], [{}, {}])).toBe(false);
    expect(same([{}], [{}])).toBe(true);
    expect(same([{}], [{}, {}])).toBe(false);
    expect(same([[]], [{}])).toBe(false);
    expect(same([[], {}], [[], {}])).toBe(true);
    expect(same(['i'], ['i'])).toBe(false);
    expect(same(['i'], ['i', null])).toBe(false);
    expect(same(['i'], ['i', undefined])).toBe(false);
    expect(same(['i'], ['i', undefined])).toBe(false);
    expect(same([], {})).toBe(false);
    expect(same([], {
      p: []
    })).toBe(false);

    expect(same({}, [])).toBe(false);
    expect(same({}, ['i'])).toBe(false);
    expect(same({}, {})).toBe(false);
    expect(same({}, {
      p: {}
    })).toBe(false);
    expect(same({
      p: {}
    }, {
      p: {}
    })).toBe(true);
    expect(same({
      p: {}
    }, {
      p: []
    })).toBe(true);
    expect(same({
      p: {}
    }, {
      q: {}
    })).toBe(false);
    expect(same({
      p: {}
    }, {
      p: {},
      q: {}
    })).toBe(false);
    expect(same({}, {
      p: []
    })).toBe(false);
    expect(same({
      p: []
    }, {
      p: []
    })).toBe(true);
    expect(same({
      p: []
    }, {
      p: {}
    })).toBe(false);
    expect(same({
      p: []
    }, {
      q: []
    })).toBe(false);
    expect(same({
      p: []
    }, {
      p: [],
      q: []
    })).toBe(false);
  });
});
