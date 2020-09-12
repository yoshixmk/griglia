import { Callback, CancelableForEach } from './CancelableForEach';

export class AwesomeCollection implements CancelableForEach<unknown> {
  public forEach(cb: Callback<unknown>): void {
    // TODO
    console.log(cb);
  }
}
