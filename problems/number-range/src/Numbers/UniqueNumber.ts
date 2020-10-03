import { NumberMediator } from '../NumberMediator';
import { ComplexNumber } from './ComplexNumber';
import { NoNumber } from './NoNumber';
import { RangeElement } from './RangeElement';
import { RangeNumber } from './RangeNumber';

export class UniqueNumber implements RangeElement {
  private readonly num: number;
  private readonly mediator: NumberMediator;

  public static of(num: number, mediator: NumberMediator): UniqueNumber {
    return new UniqueNumber(num, mediator);
  }

  protected constructor(num: number, mediator: NumberMediator) {
    this.num = num;
    this.mediator = mediator;
  }

  public contains(num: number): boolean {
    return this.num === num;
  }

  public isAcceptable(num: number): boolean {
    if (this.num + 1 === num) {
      return true;
    }
    if (num + 1 === this.num) {
      return true;
    }

    return false;
  }

  public add(num: number): RangeElement {
    if (this.num + 1 === num) {
      return RangeNumber.of(this.num, num, this.mediator);
    }
    if (num + 1 === this.num) {
      return RangeNumber.of(num, this.num, this.mediator);
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
  }

  public remove(num: number): RangeElement {
    if (this.num === num) {
      return NoNumber.of();
    }

    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
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

  public merge(other: RangeElement): RangeElement {
    if (other instanceof NoNumber) {
      return this;
    }
    if (other.contains(this.num)) {
      return other;
    }
    if (other.isAcceptable(this.num)) {
      return other.add(this.num);
    }

    return ComplexNumber.of([this, other]);
  }

  public get(): number {
    return this.num;
  }
}
