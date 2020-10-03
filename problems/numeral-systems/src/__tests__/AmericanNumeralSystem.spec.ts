import { AmericanNumeralSystem } from '../AmericanNumeralSystem';

describe('AmericanNumeralSystem', () => {
  describe('ofString', () => {
    it('normal case', () => {
      expect.assertions(36);

      expect(AmericanNumeralSystem.ofString('0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('0.0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('0.0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('1').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('1').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('1.0').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('1.0').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('0.1').getValue()).toBe(0.1);
      expect(AmericanNumeralSystem.ofString('0.1').toString()).toBe('0.1');
      expect(AmericanNumeralSystem.ofString('0.11').getValue()).toBe(0.11);
      expect(AmericanNumeralSystem.ofString('0.11').toString()).toBe('0.11');

      expect(AmericanNumeralSystem.ofString('+0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('+0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('+0.0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('+0.0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('+1').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('+1').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('+1.0').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('+1.0').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('+0.1').getValue()).toBe(0.1);
      expect(AmericanNumeralSystem.ofString('+0.1').toString()).toBe('0.1');
      expect(AmericanNumeralSystem.ofString('+0.11').getValue()).toBe(0.11);
      expect(AmericanNumeralSystem.ofString('+0.11').toString()).toBe('0.11');

      expect(AmericanNumeralSystem.ofString('-0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('-0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('-0.0').getValue()).toBe(0);
      expect(AmericanNumeralSystem.ofString('-0.0').toString()).toBe('0');
      expect(AmericanNumeralSystem.ofString('-1').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('-1').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('-1.0').getValue()).toBe(1);
      expect(AmericanNumeralSystem.ofString('-1.0').toString()).toBe('1');
      expect(AmericanNumeralSystem.ofString('-0.1').getValue()).toBe(0.1);
      expect(AmericanNumeralSystem.ofString('-0.1').toString()).toBe('0.1');
      expect(AmericanNumeralSystem.ofString('-0.11').getValue()).toBe(0.11);
      expect(AmericanNumeralSystem.ofString('-0.11').toString()).toBe('0.11');
    });

    it('abnormal case', () => {
      expect.assertions(7);

      expect(() => {
        AmericanNumeralSystem.ofString('.').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString('..').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString('.,').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString(',.').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString('12.').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString('').toString();
      }).toThrow(Error);
      expect(() => {
        AmericanNumeralSystem.ofString(',,').toString();
      }).toThrow(Error);
    });
  });
});
