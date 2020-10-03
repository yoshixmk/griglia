import { NumeralSystem } from './NumeralSystem';
import { Value } from './Value/Value';

export abstract class ANumeralSystem implements NumeralSystem {
  protected readonly value: Value;

  protected constructor(value: Value) {
    this.value = value;
  }

  public getValue(): number {
    return this.value.getValue();
  }

  public abstract stringify(): string;

  public toString(): string {
    return this.stringify();
  }
}
