import { RangeElement } from './RangeElement';
import { UniqueNumber } from './UniqueNumber';

export class NoNumber implements RangeElement {
  private static readonly INSTANCE: NoNumber = new NoNumber();

  public static of(): NoNumber {
    return NoNumber.INSTANCE;
  }

  protected constructor() {
    // NOOP
  }

  public isValid(): boolean {
    return false;
  }

  public add(num: number): RangeElement {
    return UniqueNumber.of(num);
  }

  public remove(): RangeElement {
    return this;
  }

  public serialize(): string {
    return '';
  }
}
