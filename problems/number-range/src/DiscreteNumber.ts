import { RangeElement } from './RangeElement';

export class DiscreteNumber implements RangeElement {
  private readonly nums: Array<number>;

  public static of(nums: Array<number>): DiscreteNumber {
    return new DiscreteNumber(nums);
  }

  protected constructor(nums: Array<number>) {
    this.nums = nums;
  }

  public isValid(num: number): boolean {
    return this.nums.some((n: number) => {
      return n === num;
    });
  }

  public add(num: number): RangeElement {
    if (this.isValid(num)) {
      return this;
    }

    const nums: Array<number> = [...this.nums, num];
    nums.sort((n1: number, n2: number) => {
      return n1 - n2;
    });

    if (nums.length <= 2) {
      return DiscreteNumber.of(nums);
    }
    if (this.iss()) {
      // TODO RISNAchI?
    }

    return DiscreteNumber.of(nums);
  }

  public remove(num: number): RangeElement {
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

  private iss(): boolean {
    //
  }
}
