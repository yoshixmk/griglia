import { NumberRange } from './NumberRange';
import { ComplexNumber } from './Numbers/ComplexNumber';
import { NoNumber } from './Numbers/NoNumber';
import { RangeElement } from './Numbers/RangeElement';

export class ComplexRange implements NumberRange {
  private element: RangeElement;

  public static of(element: RangeElement): ComplexRange {
    return new ComplexRange(element);
  }

  protected constructor(element: RangeElement) {
    this.element = element;
  }

  public isValid(num: number): boolean {
    return this.element.contains(num);
  }

  public add(num: number): void {
    if (this.element.contains(num)) {
      return;
    }
    if (this.element.isAcceptable(num)) {
      this.element = this.reduce(this.element.add(num));
    }
  }

  public remove(num: number): void {
    if (this.element.contains(num)) {
      this.element = this.reduce(this.element.remove(num));
    }
  }

  public serialize(): string {
    return this.element.serialize();
  }

  private reduce(range: RangeElement): RangeElement {
    if (range instanceof ComplexNumber) {
      return range.reduce((prev: RangeElement, curr: RangeElement) => {
        return prev.merge(curr);
      }, NoNumber.of());
    }

    return range;
  }
}
