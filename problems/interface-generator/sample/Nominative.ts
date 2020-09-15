export interface Nominative<T extends Nominative<T>, N extends string = string> {
  readonly noun: N;

  equals(other: T): boolean;

  hashCode(): string;

  serialize(): string;

  toString(): string;
}
