import { equal } from '../ObjectEquality';

describe('ObjectEquality', () => {
  it('tests', () => {
    expect.assertions(143);

    expect(equal(undefined, undefined)).toBe(true);
    expect(equal(undefined, null)).toBe(false);
    expect(equal(undefined, false)).toBe(false);
    expect(equal(undefined, true)).toBe(false);
    expect(equal(undefined, 0)).toBe(false);
    expect(equal(undefined, 1)).toBe(false);
    expect(equal(undefined, '')).toBe(false);
    expect(equal(undefined, 'i')).toBe(false);
    expect(equal(undefined, [])).toBe(false);
    expect(equal(undefined, [undefined])).toBe(false);
    expect(equal(undefined, {})).toBe(false);
    expect(equal(undefined, {
      p: undefined
    })).toBe(false);

    expect(equal(null, undefined)).toBe(false);
    expect(equal(null, null)).toBe(true);
    expect(equal(null, false)).toBe(false);
    expect(equal(null, true)).toBe(false);
    expect(equal(null, 0)).toBe(false);
    expect(equal(null, 1)).toBe(false);
    expect(equal(null, '')).toBe(false);
    expect(equal(null, 'i')).toBe(false);
    expect(equal(null, [])).toBe(false);
    expect(equal(null, [null])).toBe(false);
    expect(equal(null, {})).toBe(false);
    expect(equal(null, {
      p: null
    })).toBe(false);

    expect(equal(false, undefined)).toBe(false);
    expect(equal(false, null)).toBe(false);
    expect(equal(false, false)).toBe(true);
    expect(equal(false, true)).toBe(false);
    expect(equal(false, 0)).toBe(false);
    expect(equal(false, 1)).toBe(false);
    expect(equal(false, '')).toBe(false);
    expect(equal(false, 'i')).toBe(false);
    expect(equal(false, [])).toBe(false);
    expect(equal(false, [false])).toBe(false);
    expect(equal(false, {})).toBe(false);
    expect(equal(false, {
      p: false
    })).toBe(false);

    expect(equal(true, undefined)).toBe(false);
    expect(equal(true, null)).toBe(false);
    expect(equal(true, false)).toBe(false);
    expect(equal(true, true)).toBe(true);
    expect(equal(true, 0)).toBe(false);
    expect(equal(true, 1)).toBe(false);
    expect(equal(true, '')).toBe(false);
    expect(equal(true, 'i')).toBe(false);
    expect(equal(true, [])).toBe(false);
    expect(equal(true, [true])).toBe(false);
    expect(equal(true, {})).toBe(false);
    expect(equal(true, {
      p: true
    })).toBe(true);

    expect(equal(0, undefined)).toBe(false);
    expect(equal(0, null)).toBe(false);
    expect(equal(0, false)).toBe(false);
    expect(equal(0, true)).toBe(false);
    expect(equal(0, 0)).toBe(true);
    expect(equal(0, 1)).toBe(false);
    expect(equal(0, '')).toBe(false);
    expect(equal(0, 'i')).toBe(false);
    expect(equal(0, [])).toBe(false);
    expect(equal(0, [0])).toBe(false);
    expect(equal(0, {})).toBe(false);
    expect(equal(0, {
      p: 0
    })).toBe(false);

    expect(equal(1, undefined)).toBe(false);
    expect(equal(1, null)).toBe(false);
    expect(equal(1, false)).toBe(false);
    expect(equal(1, true)).toBe(false);
    expect(equal(1, 0)).toBe(false);
    expect(equal(1, 1)).toBe(true);
    expect(equal(1, '')).toBe(false);
    expect(equal(1, 'i')).toBe(false);
    expect(equal(1, [])).toBe(false);
    expect(equal(1, [1])).toBe(false);
    expect(equal(1, {})).toBe(false);
    expect(equal(1, {
      p: 1
    })).toBe(false);

    expect(equal('', undefined)).toBe(false);
    expect(equal('', null)).toBe(false);
    expect(equal('', false)).toBe(false);
    expect(equal('', true)).toBe(false);
    expect(equal('', 0)).toBe(false);
    expect(equal('', 1)).toBe(false);
    expect(equal('', '')).toBe(true);
    expect(equal('', 'i')).toBe(false);
    expect(equal('', [])).toBe(false);
    expect(equal('', [''])).toBe(false);
    expect(equal('', {})).toBe(false);
    expect(equal('', {
      p: ''
    })).toBe(false);

    expect(equal('i', undefined)).toBe(false);
    expect(equal('i', null)).toBe(false);
    expect(equal('i', false)).toBe(false);
    expect(equal('i', true)).toBe(false);
    expect(equal('i', 0)).toBe(false);
    expect(equal('i', 1)).toBe(false);
    expect(equal('i', '')).toBe(false);
    expect(equal('i', 'i')).toBe(true);
    expect(equal('i', [])).toBe(false);
    expect(equal('i', ['i'])).toBe(false);
    expect(equal('i', {})).toBe(false);
    expect(equal('i', {
      p: 'i'
    })).toBe(false);

    expect(equal([], undefined)).toBe(false);
    expect(equal([], null)).toBe(false);
    expect(equal([], false)).toBe(false);
    expect(equal([], true)).toBe(false);
    expect(equal([], 0)).toBe(false);
    expect(equal([], 1)).toBe(false);
    expect(equal([], '')).toBe(false);
    expect(equal([], 'i')).toBe(false);
    expect(equal([], [])).toBe(true);
    expect(equal([], ['i'])).toBe(false);
    expect(equal([], [[]])).toBe(false);
    expect(equal([], [[], []])).toBe(false);
    expect(equal([[]], [[]])).toBe(true);
    expect(equal([[]], [[], []])).toBe(false);
    expect(equal([], [{}])).toBe(false);
    expect(equal([], [{}, {}])).toBe(false);
    expect(equal([{}], [{}])).toBe(true);
    expect(equal([{}], [{}, {}])).toBe(false);
    expect(equal([[]], [{}])).toBe(false);
    expect(equal([[], {}], [[], {}])).toBe(true);
    expect(equal(['i'], ['i'])).toBe(false);
    expect(equal(['i'], ['i', null])).toBe(false);
    expect(equal(['i'], ['i', undefined])).toBe(false);
    expect(equal(['i'], ['i', undefined])).toBe(false);
    expect(equal([], {})).toBe(false);
    expect(equal([], {
      p: []
    })).toBe(false);

    expect(equal({}, undefined)).toBe(false);
    expect(equal({}, null)).toBe(false);
    expect(equal({}, false)).toBe(false);
    expect(equal({}, true)).toBe(false);
    expect(equal({}, 0)).toBe(false);
    expect(equal({}, 1)).toBe(false);
    expect(equal({}, '')).toBe(false);
    expect(equal({}, 'i')).toBe(false);
    expect(equal({}, [])).toBe(false);
    expect(equal({}, ['i'])).toBe(false);
    expect(equal({}, {})).toBe(false);
    expect(equal({}, {
      p: {}
    })).toBe(false);
    expect(equal({
      p: {}
    }, {
      p: {}
    })).toBe(true);
    expect(equal({
      p: {}
    }, {
      p: []
    })).toBe(true);
    expect(equal({
      p: {}
    }, {
      q: {}
    })).toBe(false);
    expect(equal({
      p: {}
    }, {
      p: {},
      q: {}
    })).toBe(false);
    expect(equal({}, {
      p: []
    })).toBe(false);
    expect(equal({
      p: []
    }, {
      p: []
    })).toBe(true);
    expect(equal({
      p: []
    }, {
      p: {}
    })).toBe(false);
    expect(equal({
      p: []
    }, {
      q: []
    })).toBe(false);
    expect(equal({
      p: []
    }, {
      p: [],
      q: []
    })).toBe(false);
  });
});
