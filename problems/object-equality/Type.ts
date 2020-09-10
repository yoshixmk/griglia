export type Primitive = null | undefined | number | string | boolean;
export type PlainObject = {
  [key: string]: Item | ArrayLike<Item>;
};
export type Item = Primitive | PlainObject;
