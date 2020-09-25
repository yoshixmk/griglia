import { ComplexRange } from './ComplexRange';
import { NumberRange } from './NumberRange';
import { ComplexNumber } from './Numbers/ComplexNumber';
import { RangeElement } from './Numbers/RangeElement';
import { RangeNumber } from './Numbers/RangeNumber';
import { UniqueNumber } from './Numbers/UniqueNumber';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const UNIQUE_NUM: RegExp = /\d+/u;

export class RangeFactory {
  private readonly min: number;
  private readonly max: number;
  private readonly minAbbr: number;

  public static of(min: number, max: number, minAbbr: number): RangeFactory {
    return new RangeFactory(min, max, minAbbr);
  }

  protected constructor(min: number, max: number, minAbbr: number) {
    this.min = min;
    this.max = max;
    this.minAbbr = minAbbr;
  }

  public forge(str: string): NumberRange {
    const ranges: Array<RangeElement> = str.split(', ').map<RangeElement>((s: string) => {
      if (UNIQUE_NUM.test(s)) {
        return UniqueNumber.of(Number(s), this);
      }
      const minmax: Array<string> = s.split(' - ');

      return RangeNumber.of(Number(minmax[0]), Number(minmax[1]), this);
    });

    return ComplexRange.of(ComplexNumber.of(ranges));
  }

  public getMin(): number {
    return this.min;
  }

  public getMax(): number {
    return this.max;
  }

  public getMinAbbr(): number {
    return this.minAbbr;
  }
}
