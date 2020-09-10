# Object equality

`Plain Object`を比較します。

プリミティブ型は、同じ値であれば等値比較が成立します(`NaN`を除く)。

```typescript
1 === 1
// true
true === true
// true
'candy' ==== 'candy'
// true
```

一方、リファレンス型はオブジェクトそのものが同じものでない限りたとえ同じキーとプロパティのペアでも等値比較は`false`になります。

```typescript
{} === {}
// false
{
  kangaroo: 'australia'
} === {
  kangaroo: 'australia'
}
// false
[] === []
// false
```

## Implementation

`Plain Object`が同じキー、プロパティを持っているか判定する関数`objectEquality`を実装してください。

`Plain Object`は以下のように定義します。

```typescript
type Primitive = undefined | null | boolean | number | string;
type PlainObject = Readonly<{
  [key: string]: Value;
}>;
type Value = Primitive | PlainObject | ArrayLike<Value>;
```

## Concepts

* `NaN`はプリミティブ値として考慮しなくても構いません
    * プリミティブ型はすべて等値比較できるものとします。の意味です
* オブジェクトの入れ子を考慮する必要があります
* コンストラクタを持つオブジェクトを考慮する必要はありません

## Conditions

* `JSON.stringify(), JSON.parse()`を使ってはいけません
* 他のパッケージを使ってはいけません

## Tests

`ObjectEquality.spec.ts`があるので参照してください。

```
yarn test
```