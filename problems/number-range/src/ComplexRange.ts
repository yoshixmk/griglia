import { NumberRange } from './NumberRange';
import { ComplexNumber } from './Numbers/ComplexNumber';
import { RangeElement } from './RangeElement';

export class ComplexRange implements NumberRange {
  private complex: ComplexNumber;

  public static of(complex: ComplexNumber): ComplexRange {
    return new ComplexRange(complex);
  }

  protected constructor(complex: ComplexNumber) {
    this.complex = complex;
  }

  public isValid(num: number): boolean {
    return this.complex.some((range: RangeElement) => {
      return range.contains(num);
    });
  }

  public add(num: number): void {
    const ranges: Array<RangeElement> = this.complex.map<RangeElement>((range: RangeElement) => {
      if (range.ready(num)) {
        return range.add(num);
      }

      return range;
    });

    this.complex = ComplexNumber.of(ranges);
  }

  public remove(num: number): void {
    const ranges: Array<RangeElement> = [...this.complex].map<RangeElement>((range: RangeElement) => {
      if (range.contains(num)) {
        return range.remove(num);
      }

      return range;
    });

    this.complex = ComplexNumber.of(ranges);
  }

  public serialize(): string {
    return this.complex.map<string>((range: RangeElement) => {
      return range.serialize();
    }).join(', ');
  }
}
