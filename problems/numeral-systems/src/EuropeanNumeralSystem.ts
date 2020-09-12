import { BaseNumeralSystem } from './BaseNumeralSystem';

export class EuropeanNumeralSystem extends BaseNumeralSystem {

  public stringify(): string {
    const regexp: RegExp = /[+-]?(\d{1,3})(?=(\d{3})+(?!\d))/ug;
    return `${this.value}`.replace(/(.*)\./ug, '$1,').replace(regexp, '$1.');
  }

}
