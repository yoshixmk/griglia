import { RangeElement } from './RangeElement';

export class NoNumber implements RangeElement {
  private static readonly INSTANCE: NoNumber = new NoNumber();

  public static of(): NoNumber {
    return NoNumber.INSTANCE;
  }

  protected constructor() {
    // NOOP
  }

  public contains(): boolean {
    return false;
  }

  public isAcceptable(): boolean {
    return false;
  }

  public add(num: number): RangeElement {
    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
  }

  public remove(num: number): RangeElement {
    throw new Error(`THIS VALUE IS NOT SUITABLE FOR THIS INSTANCE: ${num}`);
  }

  public serialize(): string {
    return '';
  }

  public equals(other: RangeElement): boolean {
    return this === other;
  }

  public merge(other: RangeElement): RangeElement {
    return other;
  }
}
