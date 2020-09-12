import { AmericanNumeralSystem } from '../AmericanNumeralSystem';

describe('american', () => {
  it('getValue', () => {
    expect.assertions(1);
    expect(new AmericanNumeralSystem(123).getValue()).toBe(123);
  });
  it('stringify', () => {
    expect.assertions(1);
    expect(new AmericanNumeralSystem(123).stringify()).toBe('123');
  });
});
