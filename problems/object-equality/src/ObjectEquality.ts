type Primitive = undefined | null | boolean | number | string;
type PlainObject = {
  [key: string]: PlainObjectItem;
};
type ObjectLiteral = PlainObject | ReadonlyArray<PlainObjectItem>;
type PlainObjectItem = Primitive | ObjectLiteral;

export const same = (v1: ObjectLiteral, v2: ObjectLiteral): boolean => {
  // TODO
  console.log(v1);
  console.log(v2);

  return false;
};
