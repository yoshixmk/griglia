type TableRow = Readonly<{
  [key: string]: string | number;
}>;

type Table = TableRow | ReadonlyArray<TableRow>;

export const tablify = (table: Table): string => {
  // TODO
  console.log(table);

  return '';
};
