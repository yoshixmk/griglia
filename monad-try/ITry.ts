export interface ITry<T, E extends Error> {
  get(): T;

  isSuccess(): boolean;

  filter(predicate: (value: T) => boolean): ITry<T, E>;

  map<U>(mapper: (value: T) => U): ITry<U, E>;

  recover<U>(mapper: (err: E) => U): ITry<U, E>;
}
