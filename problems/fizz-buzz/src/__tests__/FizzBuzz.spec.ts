import { fizzbuzz } from '../FizzBuzz';

describe('FizzBuzz', () => {
  it('tests', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(2)).toBe('Primezz');
    expect(fizzbuzz(3)).toBe('Fizz Jazz Primezz');
    expect(fizzbuzz(4)).toBe('Dazz');
    expect(fizzbuzz(5)).toBe('Buzz Primezz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(7)).toBe('Primezz');
    expect(fizzbuzz(8)).toBe('Dazz');
    expect(fizzbuzz(9)).toBe('Fizz');
    expect(fizzbuzz(10)).toBe('Buzz');

    expect(fizzbuzz(11)).toBe('Primezz');
    expect(fizzbuzz(12)).toBe('Fizz Dazz');
    expect(fizzbuzz(13)).toBe('Jazz Primezz');
    expect(fizzbuzz(14)).toBe('14');
    expect(fizzbuzz(15)).toBe('Fizz Buzz');
    expect(fizzbuzz(16)).toBe('Dazz');
    expect(fizzbuzz(17)).toBe('Primezz');
    expect(fizzbuzz(18)).toBe('Fizz');
    expect(fizzbuzz(19)).toBe('Primezz');
    expect(fizzbuzz(20)).toBe('Dazz Buzz');

    expect(fizzbuzz(21)).toBe('Fizz');
    expect(fizzbuzz(22)).toBe('22');
    expect(fizzbuzz(23)).toBe('Jazz Primezz');
    expect(fizzbuzz(24)).toBe('Fizz Dazz');
    expect(fizzbuzz(25)).toBe('Buzz');
    expect(fizzbuzz(26)).toBe('26');
    expect(fizzbuzz(27)).toBe('Fizz');
    expect(fizzbuzz(28)).toBe('Dazz');
    expect(fizzbuzz(29)).toBe('Primezz');
    expect(fizzbuzz(30)).toBe('Fizz Buzz Jazz');

    expect(fizzbuzz(31)).toBe('Jazz Primezz');
    expect(fizzbuzz(32)).toBe('Dazz Jazz');
    expect(fizzbuzz(33)).toBe('Fizz Jazz');
    expect(fizzbuzz(34)).toBe('Jazz');
    expect(fizzbuzz(35)).toBe('Buzz Jazz');
    expect(fizzbuzz(36)).toBe('Fizz Dazz Jazz');
    expect(fizzbuzz(37)).toBe('Jazz Primezz');
    expect(fizzbuzz(38)).toBe('Jazz');
    expect(fizzbuzz(39)).toBe('Fizz Jazz');
    expect(fizzbuzz(40)).toBe('Dazz Buzz');
  });
});
