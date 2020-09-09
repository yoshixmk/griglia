import { IKey } from './IKey.ts';

export class MapMap<K extends IKey, V> implements Map<K, V> {
  public readonly size: number;

  public clear(): void {
    // TODO
  }

  public delete(key: K): boolean {
    // TODO
  }

  public forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {
    // TODO
  }

  public get(key: K): V | undefined {
    // TODO
  }

  public has(key: K): boolean {
    // TODO
  }

  public set(key: K, value: V): this {
    // TODO
  }
}
