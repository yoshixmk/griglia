import { ComplexRange } from './ComplexRange';
import { NumberMediator } from './NumberMediator';
import { NumberRange } from './NumberRange';
import { ComplexNumber } from './Numbers/ComplexNumber';
import { RangeElement } from './Numbers/RangeElement';
import { RangeNumber } from './Numbers/RangeNumber';
import { UniqueNumber } from './Numbers/UniqueNumber';

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const UNIQUE_NUM: RegExp = /\d+/u;
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const RANGE_NUM: RegExp = /\d+\s*-\s*\d+/u;
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const MIN_NUM: RegExp = /\d+\s*-/u;
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const MAX_NUM: RegExp = /-\s*\d+/u;

export class RangeFactory implements NumberMediator {
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

  public getMin(): number {
    return this.min;
  }

  public getMax(): number {
    return this.max;
  }

  public getMinAbbr(): number {
    return this.minAbbr;
  }

  public forge(str: string): NumberRange {
    const ranges: Array<RangeElement> = this.delimiter(str).map<RangeElement>((s: string) => {
      if (RANGE_NUM.test(s)) {
        const minmax: Array<string> = s.split(' - ');

        return RangeNumber.of(Number(minmax[0]), Number(minmax[1]), this);
      }
      if (MIN_NUM.test(s)) {
        const min: Array<string> = s.split(' -');

        return RangeNumber.of(Number(min[0]), this.max, this);
      }
      if (MAX_NUM.test(s)) {
        const max: Array<string> = s.split('- ');

        return RangeNumber.of(this.min, Number(max[1]), this);
      }
      if (UNIQUE_NUM.test(s)) {
        return UniqueNumber.of(Number(s), this);
      }

      throw new Error('THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE');
    });

    return ComplexRange.of(ComplexNumber.of(ranges));
  }

  private delimiter(str: string): Array<string> {
    const strs: Array<string> = str.split(', ');

    if (strs.length === 0) {
      return [str];
    }

    return strs;
  }
}
