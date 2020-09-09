import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { alternate } from './Alternation.ts';

Deno.test('Alternation test', () => {
  assertEquals(alternate<number>(
    [1, 3, 5],
    [2, 4, 6]
  ), [1, 2, 3, 4, 5, 6]);

  assertEquals(alternate<number>(
    [1, 3, 5],
    [2, 4]
  ), [1, 2, 3, 4, 5]);

  assertEquals(alternate<number>(
    [1, 2, 3],
    [4, 5]
  ), [1, 4, 2, 5, 3]);

  assertEquals(alternate<number>(
    [1, 3, 5],
    [0]
  ), [1, 0, 3, 5]);

  assertEquals(alternate<number>(
    [1, 3, 5],
    []
  ), [1, 3, 5]);

  assertEquals(alternate<number>(
    [3],
    [2, 4, 6]
  ), [3, 2, 4, 6]);

  assertEquals(alternate<number>(
    [],
    [2, 4, 6]
  ), [2, 4, 6]);
});
