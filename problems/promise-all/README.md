# Promise all

非同期処理を扱うクラスの`Promise<T>`にあるstatic methodの`Promise.all<T>()`を実装します。

## Implementation

`ArrayLike<PromiseLike<T>>`が与えられたときにそれを`Promise<Array<T>>`に変換する関数`all()`を実装してください。

## Concepts

* 処理の終わった順番ではなく、与えられた配列の順番のとおりに結果を返す必要があります
    * 処理に`[90, 60, 30, 0]`msかかるPromiseが入っていたとしても結果は`[0, 30, 60, 90]`のように入れ替えてはいけません
* 配列の要素数が0のときは特別に処理をする方が楽です
* `ArrayLike<T>`, `PromiseLike<T>`は実在するインターフェイスです
    * `ArrayLike<T>`で扱う方が今回の場合は問題が起きにくいです
* `array.length`の扱いに注意が必要です

## Conditions

* `Promise.all()`を使ってはいけません
    * 問題の意義が崩壊します
* 他のパッケージを使ってはいけません

## Tests

`All.spec.ts`があるので参照してください。

```
yarn test
```