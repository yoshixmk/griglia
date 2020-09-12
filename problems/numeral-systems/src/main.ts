import { NumeralSystemFactory } from './NumeralSystemFactory';

// Execute command:
// $npx ts-node problems/numeral-systems/src/main.ts

const factory: NumeralSystemFactory = NumeralSystemFactory.getInstance();

// How to use

// american
console.log(factory.createNumeralSystem('1,234.567').stringify());
// europe
console.log(factory.createNumeralSystem('1.234,567').stringify());
