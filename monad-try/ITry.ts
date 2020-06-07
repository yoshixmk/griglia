export interface ITry<T, E extends Error> {
  get(): T;

  isSuccess(): boolean;

  recover<U>(mapper: (value: T) => U): ITry<U, E>;

  filter(predicate: (value: T) => boolean): ITry<T, E>;

  map<U>(mapper: (value: T) => U): ITry<U, E>;
}
