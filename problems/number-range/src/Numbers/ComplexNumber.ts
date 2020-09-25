import { NoNumber } from './NoNumber';
import { RangeElement } from './RangeElement';

export class ComplexNumber implements RangeElement {
  private readonly ranges: ReadonlyArray<RangeElement>;

  public static of(ranges: ReadonlyArray<RangeElement>): ComplexNumber {
    const arr: Array<RangeElement> = [];

    ranges.filter((range: RangeElement) => {
      return !(range instanceof NoNumber);
    }).forEach((range: RangeElement) => {
      ComplexNumber.flatten(range, arr);
    });

    return new ComplexNumber(arr);
  }

  private static flatten(range: RangeElement, arr: Array<RangeElement>) {
    if (range instanceof ComplexNumber) {
      range.ranges.forEach((r: RangeElement) => {
        ComplexNumber.flatten(r, arr);
      });

      return;
    }

    arr.push(range);
  }

  protected constructor(ranges: ReadonlyArray<RangeElement>) {
    this.ranges = ranges;
  }

  public contains(num: number): boolean {
    return this.ranges.some((range: RangeElement) => {
      return range.contains(num);
    });
  }

  public isAcceptable(num: number): boolean {
    return this.ranges.some((range: RangeElement) => {
      return range.isAcceptable(num);
    });
  }

  public add(num: number): ComplexNumber {
    const ranges: Array<RangeElement> = this.ranges.map((range: RangeElement) => {
      if (range.isAcceptable(num)) {
        return range.add(num);
      }

      return range;
    });

    return ComplexNumber.of(ranges);
  }

  public remove(num: number): ComplexNumber {
    const ranges: Array<RangeElement> = this.ranges.map<RangeElement>((range: RangeElement) => {
      if (range.contains(num)) {
        return range.remove(num);
      }

      return range;
    });

    return ComplexNumber.of(ranges);
  }

  public serialize(): string {
    return this.ranges.map<string>((range: RangeElement) => {
      return range.serialize();
    }).join(', ');
  }

  public equals(other: RangeElement): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof ComplexNumber) {
      return this.ranges.every((r: RangeElement, i: number) => {
        return r.equals(other.ranges[i]);
      });
    }

    return false;
  }

  public some(predicate: (value: RangeElement, index: number) => unknown): boolean {
    return this.ranges.some(predicate);
  }
}
