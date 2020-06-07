export interface IOptional<T> {
  get(): T;

  getOrElse(other: T): T;

  isPresent(): boolean;

  ifPresent(consumer: (value: T) => void): void;
  ifPresent(consumer: (value: Promise<T>) => void): Promise<void>;

  filter(predicate: (value: T) => boolean): IOptional<T>;

  map<U>(mapper: (value: T) => U): IOptional<U>;
}
