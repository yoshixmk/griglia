export interface RangeElement {
  isValid(num: number): boolean;

  add(num: number): RangeElement;

  remove(num: number): RangeElement;

  serialize(): string;
}
