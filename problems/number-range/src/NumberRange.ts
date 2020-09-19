export interface NumberRange {
  isValid(num: number): boolean;

  add(num: number): void;

  remove(num: number): void;

  serialize(): string;
}
