import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { MapMap } from './MapMap.ts';

Deno.test('MapMap test', () => {
  const key1: Key = new Key('key 1');
  const key2: Key = new Key('key 3');
  const key3: Key = new Key('key 1');

  const value1: Value = new Value('value');
  const value2: Value = new Value('value');

  const mapmap: MapMap<Key, Value> = new MapMap<Key, Value>();

  assertEquals(mapmap.has(key1), false);
  assertEquals(mapmap.has(key2), false);
  assertEquals(mapmap.has(key3), false);

  mapmap.set(key1, value1);

  assertEquals(mapmap.has(key1), true);
  assertEquals(mapmap.has(key2), false);
  assertEquals(mapmap.has(key3), true);

  assertEquals(mapmap.get(key1), value1);
  assertEquals(mapmap.get(key2), undefined);
  assertEquals(mapmap.get(key3), value1);

  assertEquals(mapmap.get(key1)).not.toBe(value2);
  assertEquals(mapmap.get(key3)).not.toBe(value2);

  assertEquals(mapmap.delete(key1), true);

  assertEquals(mapmap.has(key1), false);
  assertEquals(mapmap.has(key2), false);
  assertEquals(mapmap.has(key3), false);

  mapmap.set(key1, value1);
  mapmap.set(key1, value2);

  assertEquals(mapmap.get(key1), value2);
  assertEquals(mapmap.get(key2), undefined);
  assertEquals(mapmap.get(key3), value2);

  assertEquals(mapmap.get(key1)).not.toBe(value1);
  assertEquals(mapmap.get(key3)).not.toBe(value1);
});
