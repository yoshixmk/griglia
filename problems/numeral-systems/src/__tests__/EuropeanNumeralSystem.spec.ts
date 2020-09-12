import { EuropeanNumeralSystem } from '../EuropeanNumeralSystem';

describe('european', () => {
  it('getValue', () => {
    expect.assertions(1);
    expect(new EuropeanNumeralSystem(123).getValue())
      .toBe(123);
  });
  it('stringify', () => {
    expect.assertions(1);
    expect(new EuropeanNumeralSystem(123).stringify())
      .toBe('123');
  });
  it('stringify Comma', () => {
    expect.assertions(1);
    expect(new EuropeanNumeralSystem(1234567).stringify())
      .toBe('1.234.567');
  });
  it('stringify Decimal point', () => {
    expect.assertions(1);
    expect(new EuropeanNumeralSystem(1234.567).stringify())
      .toBe('1.234,567');
  });
  it('stringify Minus', () => {
    expect.assertions(1);
    expect(new EuropeanNumeralSystem(-1234.567).stringify())
      .toBe('-1.234,567');
  });
});
