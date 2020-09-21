import { RangeElement } from '../RangeElement';
import { ComplexNumber } from './ComplexNumber';
import { UniqueNumber } from './UniqueNumber';

export class RangeNumber implements RangeElement {
  private readonly min: UniqueNumber;
  private readonly max: UniqueNumber;

  public static of(min: UniqueNumber, max: UniqueNumber): RangeNumber {
    if (min.get() >= max.get()) {
      throw new Error(`MIN >= MAX: GIVEN MIN: ${min.serialize()}, MAX: ${max.serialize()}`);
    }

    return new RangeNumber(min, max);
  }

  protected constructor(min: UniqueNumber, max: UniqueNumber) {
    this.min = min;
    this.max = max;
  }

  public contains(num: number): boolean {
    if (this.min.get() > num) {
      return false;
    }
    if (this.max.get() < num) {
      return false;
    }

    return true;
  }

  public ready(num: number): boolean {
    if (this.min.get() - 1 === num) {
      return true;
    }
    if (this.max.get() + 1 === num) {
      return true;
    }

    return false;
  }


  public add(num: number): RangeElement {
    if (this.min.get() - 1 === num) {
      return RangeNumber.of(
        UniqueNumber.of(num),
        this.max
      );
    }
    if (this.max.get() + 1 === num) {
      return RangeNumber.of(
        this.min,
        UniqueNumber.of(num)
      );
    }

    throw this;
  }

  public remove(num: number): RangeElement {
    const min: number = this.min.get();
    const max: number = this.max.get();

    if (min === num) {
      return RangeNumber.of(
        UniqueNumber.of(num + 1),
        this.max
      );
    }
    if (max === num) {
      return RangeNumber.of(
        this.min,
        UniqueNumber.of(num - 1)
      );
    }
    if (min < num && num < max) {
      return ComplexNumber.of([
        this.minRange(num),
        this.maxRange(num)
      ]);
    }

    return this;
  }

  public serialize(): string {
    const min: number = this.min.get();
    const max: number = this.max.get();

    switch (max - min) {
      case 1: {
        return `${min}, ${max}`;
      }
      default: {
        return `${min} - ${max}`;
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

  private minRange(num: number): RangeElement {
    const min: number = this.min.get();

    if (num - min === 1) {
      return this.min;
    }

    return RangeNumber.of(this.min, UniqueNumber.of(num - 1));
  }

  private maxRange(num: number): RangeElement {
    const max: number = this.max.get();

    if (max - num === 1) {
      return this.max;
    }

    return RangeNumber.of(UniqueNumber.of(num + 1), this.max);
  }
}
