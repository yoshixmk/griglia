import { RangeElement } from '../RangeElement';
import { ComplexNumber } from './ComplexNumber';
import { NoNumber } from './NoNumber';
import { UniqueNumber } from './UniqueNumber';

export class DiscreteNumber implements RangeElement {
  private readonly nums: Array<number>;

  public static of(nums: Array<number>): DiscreteNumber {
    return new DiscreteNumber(nums);
  }

  protected constructor(nums: Array<number>) {
    this.nums = nums;
  }

  public contains(num: number): boolean {
    return this.nums.some((n: number) => {
      return n === num;
    });
  }

  public ready(): boolean {
    return true;
  }

  public add(num: number): RangeElement {
    const nums: Array<number> = [...this.nums, num];

    nums.sort((n1: number, n2: number) => {
      return n1 - n2;
    });

    if (nums.length <= 2) {
      return DiscreteNumber.of(nums);
    }

    const groups: Array<Array<number>> = this.classify();
    const ranges: Array<RangeElement> = groups.map<RangeElement>((g: Array<number>) => {
      switch (g.length) {
        case 0: {
          return NoNumber.of();
        }
        case 1: {
          return UniqueNumber.of(g[0]);
        }
        default: {
          return DiscreteNumber.of(g);
        }
      }
    });

    return ComplexNumber.of(ranges);
  }

  public remove(num: number): RangeElement {
    if (!this.contains(num)) {
      throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
    }

    const nums: Array<number> = this.nums.filter((n: number) => {
      return n === num;
    });

    // TODO RISANCHI
    return DiscreteNumber.of(nums);
  }

  public serialize(): string {
    return this.nums.map<string>((n: number) => {
      return `${n}`;
    }).join(', ');
  }

  public equals(other: RangeElement): boolean {
    if (this === other) {
      return true;
    }
    if (other instanceof DiscreteNumber) {
      return this.nums.every((n: number, i: number) => {
        return n === other.nums[i];
      });
    }

    return false;
  }

  private classify(): Array<Array<number>> {
    let prev: number = this.nums[0];
    let j: number = 0;
    const arrr: Array<Array<number>> = [];

    this.nums.forEach((n: number) => {
      if (prev + 1 === n) {
        prev = n;
        arrr[j].push(n);

        return;
      }

      arrr[j + 1] = [n];
      j++;
    });

    return arrr;
  }
}
