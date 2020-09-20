type PaginatorArgs = Readonly<{
  min: number;
  max: number;
  current: number;
  sight: number;
}>;

export const paginate = ({ min, max, current, sight }: PaginatorArgs): string => {
  // TODO
  console.log(min);
  console.log(max);
  console.log(current);
  console.log(sight);

  return '';
};
