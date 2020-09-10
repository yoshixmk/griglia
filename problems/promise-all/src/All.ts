export const all = <T>(array: ArrayLike<PromiseLike<T>>): Promise<Array<T>> => {
  // TODO
  console.log(array);

  return Promise.resolve<Array<T>>([]);
};
