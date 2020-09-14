import { all } from '../All';

const wait = <T>(ret: T, delay: number): Promise<T> => {
  return new Promise<T>((resolve: (value?: (PromiseLike<T> | T)) => void) => {
    setTimeout(() => {
      resolve(ret);
    }, delay);
  });
};

describe('All', () => {
  it('tests', async () => {
    await expect(all<unknown>([])).resolves.toStrictEqual([]);
    await expect(all<unknown>([Promise.resolve<unknown>(5)])).resolves.toStrictEqual([5]);
    await expect(all<unknown>([
      wait<unknown>(1, 2000),
      wait<unknown>(2, 1500),
      wait<unknown>(3, 1000),
      wait<unknown>(4, 500),
      wait<unknown>(5, 0)
    ])).resolves.toStrictEqual([1, 2, 3, 4, 5]);
  }, 300);
});
