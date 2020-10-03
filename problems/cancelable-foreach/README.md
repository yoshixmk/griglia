# Cancellable forEach

`Array, Map, Set`など、コレクションとなるクラスの多くには`forEach()`という内包する要素を順次実行するためのメソッドがあります。

`forEach()`は名の通り、そのコレクションが持っている要素をすべてコールバック形式で実行できます。使用者側からは以下のようにして使います。

```typescript
collection.forEach((v: V) => {
  // ...
});
```

## Implementation

新しくコレクション`AwesomeCollection`を実装するとして、この`forEach()`を途中でキャンセルできるように実装してください。

## Examples

以下はエラーが含まれる配列で、エラーを検知したときに`forEach()`を停止させる例です。  
`AwesomeCollection`のコンストラクタはこのとおりである必要はありません。

```typescript
const collection: AwesomeCollection<string | Error> = new AwesomeCollection<string | Error>([
  'alpha',
  'bravo',
  'charlie',
  new Error(),
  'echo',
  'foxtrot',
  'golf'
]);

collection.forEach((v: string, cancel: Cancel) => {
  if (v instanceof Error) {
    cancel();

    return;
  }

  console.log(v);
});
// -> 'alpha'
// -> 'beta'
// -> 'charlie'
```

## Concepts

* クラスでも関数でもどちらでも実装することができます
    * 関数で実装するほうが簡単です

## Conditions

* Type aliasの`Cancel`は便宜的なもので、変更してもかまいません
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`CancelableForEach.spec.ts`があるので参照してください。

```
yarn test
```