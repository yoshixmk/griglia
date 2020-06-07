# Monad Optional

値が存在するかしないことを示す `Optional` というモナドがあります。

## `Optional`

ある値 `value` が与えられたときに、それが有効な値かどうかで `Optional` を作ってください。

ここで、有効ではない値とは `undefined, null` の2値とします。

なおクラス `Optional` は同梱している `IOptional` を実装してください。なお、すでにあるパッケージを使ってはいけません。

```typescript
export interface IOptional<T> {
  get(): T;

  getOrElse(other: T): T;

  isPresent(): boolean;

  ifPresent(consumer: (value: T) => void): void;
  ifPresent(consumer: (value: Promise<T>) => void): Promise<void>;

  filter(predicate: (value: T) => boolean): IOptional<T>;

  map<U>(mapper: (value: T) => U): IOptional<U>;
}
```

### メソッドの解説

|`method`|`description`|
|-|-|
|`get`|内包する値を取得する。内包する値が有効ではない場合は `Error` を投げる|
|`getOrElse`|内包する値を取得する。内包する値が有効ではない場合は `other` を返す|
|`isPresent`|内包している値が有効である場合は `true` を返す|
|`ifPresent`|内包している値が有効である場合は `consumer` を実行する|
|`filter`|内包している値が `predicate` を満たすか検証する|
|`map`|`mapper` を実行した結果の `IOptional` を返す|


## テスト

テストファイルは提供されません。