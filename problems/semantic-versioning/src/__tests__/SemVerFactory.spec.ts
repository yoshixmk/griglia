import { SemVer } from '../SemVer';
import { SemVerFactory } from '../SemVerFactory';

describe('SemVerFactory', () => {
  it('tests', () => {
    expect.assertions(70);

    const factory: SemVerFactory = new SemVerFactory();

    expect(() => {
      factory.fromString('');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('.');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('..');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('...');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1.1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('-1.1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.-1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1.-1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('-1.-1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('-1.1.-1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.-1.-1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('-1.-1.-1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1.e');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.e.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('e.1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.e.e');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('e.1.e');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('e.e.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('e.e.e');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1.1o');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1o.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1o.1.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.1o.1o');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1o.1.1o');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1o.1o.1');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1o.1o.1o');
    }).toThrow(Error);
    expect(() => {
      factory.fromString('1.2.3');
    }).not.toThrow(Error);
    expect(() => {
      factory.fromString('10.12.13');
    }).not.toThrow(Error);

    const semver1: SemVer = factory.fromString('10.11.12');
    const semver2: SemVer = factory.fromString('10.11.12');
    const semver3: SemVer = factory.fromString('11.11.12');
    const semver4: SemVer = factory.fromString('10.12.12');
    const semver5: SemVer = factory.fromString('10.11.13');

    expect(semver1.eq(semver1)).toBe(true);
    expect(semver1.gt(semver1)).toBe(false);
    expect(semver1.gte(semver1)).toBe(true);
    expect(semver1.lt(semver1)).toBe(false);
    expect(semver1.lte(semver1)).toBe(true);

    expect(semver1.eq(semver2)).toBe(true);
    expect(semver1.gt(semver2)).toBe(false);
    expect(semver1.gte(semver2)).toBe(true);
    expect(semver1.lt(semver2)).toBe(false);
    expect(semver1.lte(semver2)).toBe(true);

    expect(semver1.eq(semver3)).toBe(false);
    expect(semver1.gt(semver3)).toBe(false);
    expect(semver1.gte(semver3)).toBe(false);
    expect(semver1.lt(semver3)).toBe(true);
    expect(semver1.lte(semver3)).toBe(true);

    expect(semver1.eq(semver4)).toBe(false);
    expect(semver1.gt(semver4)).toBe(false);
    expect(semver1.gte(semver4)).toBe(false);
    expect(semver1.lt(semver4)).toBe(true);
    expect(semver1.lte(semver4)).toBe(true);

    expect(semver1.eq(semver5)).toBe(false);
    expect(semver1.gt(semver5)).toBe(false);
    expect(semver1.gte(semver5)).toBe(false);
    expect(semver1.lt(semver5)).toBe(true);
    expect(semver1.lte(semver5)).toBe(true);

    expect(semver3.eq(semver1)).toBe(false);
    expect(semver3.gt(semver1)).toBe(true);
    expect(semver3.gte(semver1)).toBe(true);
    expect(semver3.lt(semver1)).toBe(false);
    expect(semver3.lte(semver1)).toBe(false);

    expect(semver4.eq(semver1)).toBe(false);
    expect(semver4.gt(semver1)).toBe(true);
    expect(semver4.gte(semver1)).toBe(true);
    expect(semver4.lt(semver1)).toBe(false);
    expect(semver4.lte(semver1)).toBe(false);

    expect(semver5.eq(semver1)).toBe(false);
    expect(semver5.gt(semver1)).toBe(true);
    expect(semver5.gte(semver1)).toBe(true);
    expect(semver5.lt(semver1)).toBe(false);
    expect(semver5.lte(semver1)).toBe(false);
  });
});
