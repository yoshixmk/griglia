import { NumberMediator } from '../NumberMediator';
import { ComplexNumber } from './ComplexNumber';
import { NoNumber } from './NoNumber';
import { RangeElement } from './RangeElement';
import { UniqueNumber } from './UniqueNumber';

export class RangeNumber implements RangeElement {
  private readonly min: number;
  private readonly max: number;
  private readonly mediator: NumberMediator;

  public static of(min: number, max: number, mediator: NumberMediator): RangeNumber {
    if (min >= max) {
      throw new Error(`MIN >= MAX: GIVEN MIN: ${min}, MAX: ${max}`);
    }

    return new RangeNumber(min, max, mediator);
  }

  protected constructor(min: number, max: number, mediator: NumberMediator) {
    this.min = min;
    this.max = max;
    this.mediator = mediator;
  }

  public contains(num: number): boolean {
    if (num < this.min || this.max < num) {
      return false;
    }

    return true;
  }

  public isAcceptable(num: number): boolean {
    if (this.min - 1 === num || this.max + 1 === num) {
      return true;
    }

    return false;
  }

  public add(num: number): RangeElement {
    if (this.min - 1 === num) {
      return RangeNumber.of(num, this.max, this.mediator);
    }
    if (this.max + 1 === num) {
      return RangeNumber.of(this.min, num, this.mediator);
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
  }

  public remove(num: number): RangeElement {
    if (this.min === num) {
      return RangeNumber.of(num + 1, this.max, this.mediator);
    }
    if (this.max === num) {
      return RangeNumber.of(this.min, num - 1, this.mediator);
    }
    if (this.min < num && num < this.max) {
      return ComplexNumber.of([this.minRange(num), this.maxRange(num)]);
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
  }

  public serialize(): string {
    if (this.max === this.mediator.getMax()) {
      return `${this.min} -`;
    }
    if (this.min === this.mediator.getMin()) {
      return `- ${this.max}`;
    }
    if (this.max - this.min >= this.mediator.getMinAbbr()) {
      return `${this.min} - ${this.max}`;
    }

    return [...Array(this.max + 1).keys()].slice(this.min).join(', ');
  }

  public equals(other: RangeElement): boolean {
    if (this === other) {
      return true;
    }
    if (!(other instanceof RangeNumber)) {
      return false;
    }
    if (this.min !== other.min) {
      return false;
    }
    if (this.max !== other.max) {
      return false;
    }

    return true;
  }

  public merge(other: RangeElement): RangeElement {
    if (other instanceof NoNumber) {
      return this;
    }
    if (other instanceof UniqueNumber) {
      if (this.isAcceptable(other.get())) {
        return this;
      }

      return ComplexNumber.of([this, other]);
    }
    if (other instanceof RangeNumber) {
      const minimum: number = Math.min(this.min, other.min);
      const maximum: number = Math.max(this.max, other.max);

      return RangeNumber.of(minimum, maximum, this.mediator);
    }
    if (other instanceof ComplexNumber) {
      return other.merge(this);
    }

    throw new Error('UNEXPECTED CLASS INSTANCE GIVEN');
  }

  private minRange(num: number): RangeElement {
    switch (num - this.min) {
      case 0: {
        return NoNumber.of();
      }
      case 1: {
        return UniqueNumber.of(this.min, this.mediator);
      }
      default: {
        return RangeNumber.of(this.min, num - 1, this.mediator);
      }
    }
  }

  private maxRange(num: number): RangeElement {
    switch (this.max - num) {
      case 0: {
        return NoNumber.of();
      }
      case 1: {
        return UniqueNumber.of(this.max, this.mediator);
      }
      default: {
        return RangeNumber.of(num + 1, this.max, this.mediator);
      }
    }
  }
}
