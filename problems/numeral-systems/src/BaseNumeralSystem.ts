import { NumeralSystem } from './NumeralSystem';

export abstract class BaseNumeralSystem implements NumeralSystem {
  // 方式は数値を持つ
  protected value: number;

  public constructor(value: number) {
    this.value = value;
  }

  // 方式は数値を返せる
  public getValue(): number {
    return this.value;
  }
  // 方式は、その方式を適用した文字列を返せる
  abstract stringify(): string;
}
