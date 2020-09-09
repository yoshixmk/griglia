type Callback<V> = (v: V, cancel: Cancel) => void;
export type Cancel = () => void;

export class AwesomeCollection<V> {
  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public constructor(...values: Array<V>) {
    console.log(values);
  }

  // TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public forEach(cb: Callback<V>): void {
    console.log(cb);
  }
}
