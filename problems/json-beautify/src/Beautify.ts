type Primitive = undefined | null | boolean | number | string;
type PlainObject = {
  [key: string]: PlainObjectItem;
};
type ObjectLiteral = PlainObject | ReadonlyArray<PlainObjectItem>;
type PlainObjectItem = Primitive | ObjectLiteral;

export const beautify = (json: ObjectLiteral): string => {
  // TODO
  console.log(json);

  return '';
};
