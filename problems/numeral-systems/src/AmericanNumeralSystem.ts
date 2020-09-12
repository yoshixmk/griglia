import { BaseNumeralSystem } from './BaseNumeralSystem';

export class AmericanNumeralSystem extends BaseNumeralSystem {

  public stringify(): string {
    const regexp: RegExp = /[+-]?(\d{1,3})(?=(\d{3})+(?!\d))/ug;
    return `${this.value}`.replace(regexp, '$1,');
  }

}
