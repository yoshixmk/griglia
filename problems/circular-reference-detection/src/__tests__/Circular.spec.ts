/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
import { circular } from '../Circular';

describe('Circular', () => {
  it('tests', () => {
    expect.assertions(14);

    expect(circular({})).toBe(false);
    expect(circular({
      o: {}
    })).toBe(false);
    expect(circular({
      o: {
        o: {}
      }
    })).toBe(false);
    expect(circular({
      o: {
        o: {
          o: {}
        }
      }
    })).toBe(false);
    const obj: any = {
      o: {
        o: {
          o: undefined
        }
      }
    };
    obj.o.o.o = obj;

    expect(circular(obj)).toBe(true);

    expect(circular([])).toBe(false);
    expect(circular([[]])).toBe(false);
    expect(circular([[[]]])).toBe(false);
    expect(circular([[[[]]]])).toBe(false);
    const arr: any = [
      [
        [
          [
            undefined
          ]
        ]
      ]
    ];
    arr[0][0][0] = arr;

    expect(circular([[[[]]]])).toBe(true);

    expect(circular({
      obj
    })).toBe(true);
    expect(circular({
      arr
    })).toBe(true);

    expect(circular([obj])).toBe(true);
    expect(circular([arr])).toBe(true);
  });
});
