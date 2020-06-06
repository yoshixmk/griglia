import { IKey } from './IKey.ts';

export class MapMap<K extends IKey, V> implements Map<K, V> {
  public readonly size: number;

  public clear(): void {
    // ..
  }

  public delete(key: K): boolean {
    // ...
  }

  public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
    // ...
  }

  public get(key: K): V | undefined {
    // ...
  }

  public has(key: K): boolean {
    // ...
  }

  public set(key: K, value: V): this {
    // ...
  }
}
