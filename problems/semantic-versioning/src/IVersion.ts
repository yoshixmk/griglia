export interface IVersion<T extends IVersion<T>> {
  // greater than
  gt(other: T): boolean;
  // greater than or equals
  gte(other: T): boolean;
  // less than
  lt(other: T): boolean;
  // less than or equals
  lte(other: T): boolean;
  // equals
  eq(other: T): boolean;
}
