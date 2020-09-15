export type Callback<V> = (v: V, cancel: Cancel) => void;
export type Cancel = () => void;

export interface CancelableForEach<V> {
  forEach(cb: Callback<V>): void;
}
