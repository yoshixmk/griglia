export interface NumericalValue {
  isValid(num: number): boolean;

  serialize(): string;
}
