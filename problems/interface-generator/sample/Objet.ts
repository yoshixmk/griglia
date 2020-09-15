import { Nominative } from './Nominative';

export abstract class Objet<T extends Objet<T, N>, N extends string = string> implements Nominative<T, N> {
  public abstract readonly noun: N;

  protected constructor() {
    // NOOP
  }

  public abstract equals(other: T): boolean;

  public abstract serialize(): string;

  public hashCode(): string {
    // TODO STUB
    return '';
  }

  public toString(): string {
    return this.serialize();
  }
}
