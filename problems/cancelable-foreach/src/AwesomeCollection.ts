import { Callback, CancelableForEach } from './CancelableForEach';

export class AwesomeCollection implements CancelableForEach<unknown> {
  public constructor(...values: ReadonlyArray<unknown>) {
    // TODO
    console.log(values);
  }

  public forEach(cb: Callback<unknown>): void {
    // TODO
    console.log(cb);
  }
}
