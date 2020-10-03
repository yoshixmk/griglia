export interface RangeElement {
  contains(num: number): boolean;

  isAcceptable(num: number): boolean;

  add(num: number): RangeElement;

  remove(num: number): RangeElement;

  serialize(): string;

  equals(other: RangeElement): boolean;

  merge(other: RangeElement): RangeElement;
}
