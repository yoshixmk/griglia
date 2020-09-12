import { BaseNumeralSystem } from './BaseNumeralSystem';

export class AmericanNumeralSystem extends BaseNumeralSystem {

  public stringify(): string {
    const regexp: RegExp = /(\d)(?=(\d{3})+(?!\d))/ug;
    return `${this.value}`.replace(regexp, '$1,');
  }

}
