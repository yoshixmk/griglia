type Primitive = undefined | null | boolean | number | string;
type PlainObject = Readonly<{
  [key: string]: Value;
}>;
type Value = Primitive | PlainObject | ArrayLike<Value>;

export const equal = (v1: Value, v2: Value): boolean => {
  // TODO
  console.log(v1);
  console.log(v2);

  return false;
};
