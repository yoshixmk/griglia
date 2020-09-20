import { DiscreteNumber } from './DiscreteNumber';
import { NoNumber } from './NoNumber';
import { RangeElement } from './RangeElement';

export class UniqueNumber implements RangeElement {
  private readonly num: number;

  public static of(num: number): UniqueNumber {
    return new UniqueNumber(num);
  }

  protected constructor(num: number) {
    this.num = num;
  }

  public isValid(num: number): boolean {
    return this.num === num;
  }

  public add(num: number): RangeElement {
    if (this.num === num) {
      return this;
    }

    const arr: Array<number> = [this.num, num];

    arr.sort((n1: number, n2: number) => {
      return n1 - n2;
    });

    return DiscreteNumber.of(arr);
  }

  public remove(num: number): RangeElement {
    if (this.num === num) {
      return NoNumber.of();
    }

    return this;
  }

  public serialize(): string {
    return `${this.num}`;
  }
}
