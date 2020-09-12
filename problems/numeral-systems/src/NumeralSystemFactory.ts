import { AmericanNumeralSystem } from './AmericanNumeralSystem';
import { EuropeanNumeralSystem } from './EuropeanNumeralSystem';
import { NumeralSystem } from './NumeralSystem';

export class NumeralSystemFactory {
  private static readonly singleton: NumeralSystemFactory = new NumeralSystemFactory();

  public static getInstance(): NumeralSystemFactory {
    return NumeralSystemFactory.singleton;
  }

  private constructor() {
  }

  public createNumeralSystem(value: string): NumeralSystem {
    const americanNumber: number = Number(value.replace(',', ''));
    const americanNumeralSystem: AmericanNumeralSystem = new AmericanNumeralSystem(americanNumber);
    // console.log(value);
    // console.log(americanNumber);
    // console.log(americanNumeralSystem.stringify());
    if (americanNumeralSystem.stringify() === value) {
      return americanNumeralSystem;
    }

  const europeanNumber: number = Number(value.replace('.', '').replace(',', '.'));
  const europeanNumeralSystem: EuropeanNumeralSystem = new EuropeanNumeralSystem(europeanNumber);
    // console.log(value);
    // console.log(europeanNumber);
    // console.log(europeanNumeralSystem.stringify());
    if (europeanNumeralSystem.stringify() === value) {
      return europeanNumeralSystem;
    }

    throw Error('Iligal Argument: Not mutch numeral system');
  }
}
