import { RangeElement } from '../RangeElement';

export class RangeNumber implements RangeElement {
  private readonly min: number;
  private readonly max: number;

  public static of(min: number, max: number): RangeNumber {
    if (min >= max) {
      throw new Error(`MIN >= MAX: GIVEN MIN: ${min}, MAX: ${max}`);
    }

    return new RangeNumber(min, max);
  }

  protected constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public contains(num: number): boolean {
    if (this.min > num) {
      return false;
    }
    if (this.max < num) {
      return false;
    }

    return true;
  }

  public ready(num: number): boolean {
    if (this.min - 1 === num) {
      return true;
    }
    if (this.max + 1 === num) {
      return true;
    }

    return false;
  }


  public add(num: number): RangeElement {
    if (!this.ready(num)) {
      throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
    }

    if (this.min - 1 === num) {
      return RangeNumber.of(num, this.max);
    }
    if (this.max + 1 === num) {
      return RangeNumber.of(this.min, num);
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
  }

  public remove(num: number): RangeElement {
    if (!this.contains(num)) {
      throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
    }

    if (this.min === num) {
      return RangeNumber.of(num + 1, this.max);
    }
    if (this.max === num) {
      return RangeNumber.of(this.min, num - 1);
    }
    // TODO


    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS NUMBER: ${num}`);
  }

  public serialize(): string {
    switch (this.max - this.min) {
      case 1: {
        return `${this.min}, ${this.max}`;
      }
      default: {
        return `${this.min} - ${this.max}`;
      }
    }
  }

  public equals(other: RangeElement): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof RangeNumber) {
      if (this.min !== other.min) {
        return false;
      }
      if (this.max !== other.max) {
        return false;
      }

      return true;
    }

    return false;
  }
}
