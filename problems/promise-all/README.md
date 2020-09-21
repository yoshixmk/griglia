# Promise all

複数の非同期処理をまとめる`Promise.all()`を実装します。

## Implementation

非同期処理を扱うクラスの`Promise<T>`にあるstatic methodの`Promise.all<T>()`を実装します。

## Examples

`Promise.all()`のsignatureはこのようになっています。

```typescript
Promise.all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Array<T>>;
```

## Concepts

* 配列の要素数が0のときは特別に処理をする方が楽です
* 処理の終わった順番ではなく、与えられた配列の順番のとおりに結果を返す必要があります
    * 処理に`[90, 60, 30, 0]`msかかるPromiseが入っていたとしても結果は`[0, 30, 60, 90]`のように入れ替えてはいけません
* ひとつでも`Promise`がrejectedになると、その時点で`Promise.all()`は終了します
* `PromiseLike<T>`は実在するインターフェイスです
* `array.length`の扱いに注意が必要です

```typescript
interface PromiseLike<T> {
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): PromiseLike<TResult1 | TResult2>;
}
```

## Conditions

* `Promise.all()`を使ってはいけません
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`All.spec.ts`があるので参照してください。

```
yarn test
```