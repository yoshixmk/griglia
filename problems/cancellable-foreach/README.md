# Cancellable forEach

`Array, Map, Set`など、コレクションとなるクラスの多くには`forEach()`という内包する要素を順次実行するためのメソッドがあります。

`forEach()`は名の通り、そのコレクションが持っている要素をすべてコールバック形式で実行できます。使用者側からは以下のようにして使います。

```typescript
collection.forEach((v: V) => {
  // ...
});
```

## Implementation

新しくコレクション`AwesomeCollection`を作っているとして、この`forEach()`を途中でキャンセルできるように実装してください。

以下のコンストラクタは一例です。実際はこのとおりに実装する必要はありません。

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
// -> alpha beta charlie
```

## Concepts

* クラスでも関数でもどちらでも実装することができます
    * 関数で実装するほうが簡単です

## Conditions

* 他のパッケージを使ってはいけません

## Tests

`AwesomeCollection.spec.ts`があるので参照してください。

```
yarn test
```