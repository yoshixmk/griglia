import { Objet } from './Objet';

export abstract class ValueObject<T extends ValueObject<T, N>, N extends string = string> extends Objet<T, N> {
  public abstract readonly noun: N;
  private code?: string;

  public abstract equals(other: T): boolean;

  public abstract serialize(): string;

  public hashCode(): string {
    if (typeof this.code !== 'undefined') {
      return this.code;
    }


    this.code = super.hashCode();

    return this.code;
  }
}
