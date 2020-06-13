# Array Alternation

以下の結果となる `alternate` を作ってください。
ただし引数に使用する配列を破壊してはいけません。

```typescript
console.log(alternate(
  [1, 3, 5]
));
// -> [1, 3, 5]

console.log(alternate(
  [1, 3, 5],
  [2, 4, 6]
));
// -> [1, 2, 3, 4, 5, 6]

console.log(alternate(
  [1, 3, 5],
  [2, 4]
));
// -> [1, 2, 3, 4, 5]

console.log(alternate(
  [1, 2, 3],
  [4, 5]
));
// -> [1, 4, 2, 5, 3]

console.log(alternate(
  [1, 3, 5],
  [0]
));
// -> [1, 0, 3, 5]

console.log(alternate(
  [1, 3, 5],
  []
));
// -> [1, 3, 5]

console.log(alternate(
  [3],
  [2, 4, 6]
));
// -> [3, 2, 4, 6]

console.log(alternate(
  [],
  [2, 4, 6]
));
// -> [2, 4, 6]

console.log(alternate(
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9]

```

## テスト

上記内容と同じテスト `Alternation.spec.ts` があるので参照してください。

### RUN

```bash
deno test array-alternation/Alternation.spec.ts
```