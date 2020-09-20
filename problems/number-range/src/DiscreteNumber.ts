import { NoNumber } from './NoNumber';
import { RangeElement } from './RangeElement';
import { UniqueNumber } from './UniqueNumber';

export class DiscreteNumber implements RangeElement {
  private readonly nums: Array<number>;

  public static of(nums: Array<number>): DiscreteNumber {
    return new DiscreteNumber(nums);
  }

  protected constructor(nums: Array<number>) {
    this.nums = nums;
  }

  public isValid(num: number): boolean {
    return this.nums.includes(num);
  }

  public add(num: number): RangeElement {
    const nums: Array<number> = [...this.nums];

    nums.push(num);
    nums.sort((n1, n2) => {
      return n1 - n2;
    });

    return DiscreteNumber.of(nums);
  }

  public remove(num: number): RangeElement {
    const filtered: Array<number> = this.nums.filter((n: number) => {
      return num !== n;
    });

    switch (filtered.length) {
      case 0: {
        return NoNumber.of();
      }
      case 1: {
        return UniqueNumber.of(filtered[0]);
      }
      default: {
        return DiscreteNumber.of(filtered);
      }
    }
  }

  public serialize(): string {
    return this.nums.join(', ');
  }
}
