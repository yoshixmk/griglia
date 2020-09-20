import { RangeElement } from '../RangeElement';
import { DiscreteNumber } from './DiscreteNumber';
import { NoNumber } from './NoNumber';

export class UniqueNumber implements RangeElement {
  private readonly num: number;

  public static of(num: number): UniqueNumber {
    return new UniqueNumber(num);
  }

  protected constructor(num: number) {
    this.num = num;
  }

  public contains(num: number): boolean {
    return this.num === num;
  }

  public ready(num: number): boolean {
    if (this.num + 1 === num) {
      return true;
    }
    if (num + 1 === this.num) {
      return true;
    }

    return false;
  }

  public add(num: number): RangeElement {
    if (!this.ready(num)) {
      throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
    }

    if (this.num + 1 === num) {
      return DiscreteNumber.of([this.num, num]);
    }
    if (num + 1 === this.num) {
      return DiscreteNumber.of([num, this.num]);
    }

    return this;
  }

  public remove(num: number): RangeElement {
    if (this.contains(num)) {
      return NoNumber.of();
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
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
