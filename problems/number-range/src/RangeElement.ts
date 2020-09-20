export interface RangeElement {
  contains(num: number): boolean;

  ready(num: number): boolean;

  add(num: number): RangeElement;

  remove(num: number): RangeElement;

  serialize(): string;

  equals(other: RangeElement): boolean;
}
