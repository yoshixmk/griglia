import { NumberRange } from './NumberRange';
import { ComplexNumber } from './Numbers/ComplexNumber';
import { RangeElement } from './Numbers/RangeElement';

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
    this.complex = this.complex.add(num);
  }

  public remove(num: number): void {
    this.complex = this.complex.remove(num);
  }

  public serialize(): string {
    return this.complex.serialize();
  }
}
