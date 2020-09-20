export const range = (start: number, end: number): Array<number> => {
  if (start === end) {
    return [end];
  }

  return [start, ...range(start + 1, end)];
};

export const classify = (nums: ReadonlyArray<number>): Array<Array<number>> => {
  let prev: number = nums[0];
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  let index: number = 0;
  const groups: Array<Array<number>> = [];

  nums.forEach((n: number) => {
    if (prev + 1 === n) {
      prev = n;
      groups[index].push(n);

      return;
    }

    groups[index + 1] = [n];
    index++;
  });

  return groups;
};
