import { NumberRange } from './NumberRange';
import { RangeElement } from './RangeElement';

export class ComplexRange implements NumberRange {
  private ranges: Array<RangeElement>;

  public static of(ranges: Array<RangeElement>): ComplexRange {
    return new ComplexRange(ranges);
  }

  protected constructor(ranges: Array<RangeElement>) {
    this.ranges = ranges;
  }

  public isValid(num: number): boolean {
    return this.ranges.some((range: RangeElement) => {
      return range.isValid(num);
    });
  }

  public add(num: number): void {
    const ranges: Array<RangeElement> = this.ranges.map<RangeElement>((range: RangeElement) => {
      if (!range.isValid(num)) {
        return range.add(num);
      }

      return range;
    });

    this.ranges = ranges;
  }

  public remove(num: number): void {
    const ranges: Array<RangeElement> = this.ranges.map<RangeElement>((range: RangeElement) => {
      if (range.isValid(num)) {
        return range.remove(num);
      }

      return range;
    });

    this.ranges = ranges;
  }

  public serialize(): string {
    return this.ranges.map<string>((range: RangeElement) => {
      return range.serialize();
    }).join(', ');
  }
}
