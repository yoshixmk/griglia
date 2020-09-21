import { RangeElement } from '../RangeElement';

export class ComplexNumber implements RangeElement, Iterable<RangeElement> {
  private readonly ranges: Array<RangeElement>;

  public static of(ranges: ReadonlyArray<RangeElement>): ComplexNumber {
    const r: Array<RangeElement> = [];

    ranges.forEach((range: RangeElement) => {
      if (range instanceof ComplexNumber) {
        r.push(...range);

        return;
      }

      r.push(range);
    });

    return new ComplexNumber(r);
  }

  protected constructor(ranges: Array<RangeElement>) {
    this.ranges = ranges;
  }

  public [Symbol.iterator](): Iterator<RangeElement> {
    return this.ranges[Symbol.iterator]();
  }

  public contains(num: number): boolean {
    return this.ranges.some((range: RangeElement) => {
      return range.contains(num);
    });
  }

  public ready(num: number): boolean {
    return this.ranges.some((range: RangeElement) => {
      return range.ready(num);
    });
  }

  public add(num: number): RangeElement {
    const ranges: Array<RangeElement> = this.ranges.map<RangeElement>((range: RangeElement) => {
      if (range.ready(num)) {
        return range.add(num);
      }

      return range;
    });

    return ComplexNumber.of(ranges);
  }

  public remove(num: number): RangeElement {
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

  public every(predicate: (value: RangeElement, index: number) => unknown): boolean {
    return this.ranges.every(predicate);
  }

  public some(predicate: (value: RangeElement, index: number) => unknown): boolean {
    return this.ranges.some(predicate);
  }

  public map<U>(callbackfn: (value: RangeElement, index: number) => U): Array<U> {
    return this.map<U>(callbackfn);
  }
}
