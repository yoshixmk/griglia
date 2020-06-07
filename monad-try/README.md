# Monad Try

値がどちらかではあるものの、決定できない状態を示す `Try` というモナドがあります。

## `Try`

ある値 `value` が与えられたときに、それが例外かどうかで `Try` を作ってください。

ここで、例外とは `Error` またはそのサブクラスとします。

なおクラス `Try` は同梱している `ITry` を実装してください。なお、すでにあるパッケージを使ってはいけません。

```typescript
export interface ITry<T, E extends Error> {
  get(): T;

  isSuccess(): boolean;

  filter(predicate: (value: T) => boolean): ITry<T, E>;

  map<U>(mapper: (value: T) => U): ITry<U, E>;

  recover<U>(mapper: (err: E) => U): ITry<U, E>;
}
```

### メソッドの解説

|`method`|`description`|
|-|-|
|`get`|内包する値を取得する。内包する値が例外の場合は `E` を投げる|
|`isSuccess`|内包している値が例外ではない場合は `true` を返す|
|`filter`|内包している値が `predicate` を満たすか検証する|
|`map`|`mapper` を実行した結果の `ITry` を返す|
|`recover`|内包している値が例外である場合は `mapper` を実行し、その結果の `ITry` を返す|

## テスト

テストファイルは提供されません。