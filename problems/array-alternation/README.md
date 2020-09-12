# Array alternation

引数に与えられた配列を合成します。

合成の方法は引数が`(arr1, arr2, arr3)`だった場合`arr1[0], arr2[0], arr3[0], arr1[1], arr2[1], arr3[2], ...`と合成します。  
つまり、添字を統一して与えられたすべての配列の要素を取得します。 

## Implementation

以下の結果となる関数`alternate<<T>(...arrays: Array<Array<T>): Array<T>`を作ってください。

## Examples

```typescript
alternate<number>(
  [1, 3, 5]
);
// -> [1, 3, 5]

alternate<number>(
  [1, 3, 5],
  [2, 4, 6]
);
// -> [1, 2, 3, 4, 5, 6]

alternate<number>(
  [1, 3, 5],
  [2, 4]
);
// -> [1, 2, 3, 4, 5]

alternate<number>(
  [1, 3, 5],
  [0]
);
// -> [1, 0, 3, 5]

alternate<number>(
  [1, 3, 5],
  []
);
// -> [1, 3, 5]

alternate<number>(
  [3],
  [2, 4, 6]
);
// -> [3, 2, 4, 6]

alternate<number>(
  [],
  [2, 4, 6]
);
// -> [2, 4, 6]

alternate<number>(
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
);
// -> [1, 4, 7, 2, 5, 8, 3, 6, 9]

alternate<number>(
  [1],
  [4, 5, 6],
  [],
  [8, 9]
);
// -> [1, 4, 8, 5, 9, 6]
```

## Concepts

* 与えられた配列を縦に舐めることを意味しています
* 配列が`undefined`を持っている場合があるので気をつけてください
* 配列の長さは同じである必要がありません
    * 配列が他より短い場合はそれ以降その配列から値を取得されることはありません

## Conditions

* 引数の配列を破壊してはいけません
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`Alternation.spec.ts`があるので参照してください。

```
yarn test
```