import { BaseNumeralSystem } from './BaseNumeralSystem';

export class AmericanNumeralSystem extends BaseNumeralSystem {

  public stringify(): string {
    return this.value.toString();
  }

}
