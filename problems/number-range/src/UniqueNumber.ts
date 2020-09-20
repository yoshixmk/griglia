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
    if (this.isValid(num)) {
      return this;
    }

    if (this.num + 1 === num) {
      return DiscreteNumber.of([this.num, num]);
    }
    if (num + 1 === this.num) {
      return DiscreteNumber.of([num, this.num]);
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
  }

  public remove(num: number): RangeElement {
    if (!this.isValid(num)) {
      throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
    }

    return NoNumber.of();
  }

  public serialize(): string {
    return `${this.num}`;
  }

  public equals(other: RangeElement): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof UniqueNumber) {
      return this.num === other.num;
    }

    return false;
  }
}
