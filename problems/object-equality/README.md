# Object equality

オブジェクトリテラルを比較します。

## Implementation

オブジェクトリテラルが同じキー、プロパティを持っているか判定する関数`same()`を実装してください。

## Examples

プリミティブ型は、同じ値であれば等値比較が成立します(`NaN`を除く)。

```typescript
1 === 1
// -> true
true === true
// -> true
'candy' ==== 'candy'
// -> true
```

一方、リファレンス型はオブジェクトそのものが同じものでない限りたとえ同じキーとプロパティのペアでも等値比較は`false`になります。

```typescript
{} === {}
// -> false
{
  kangaroo: 'australia'
} === {
  kangaroo: 'australia'
}
// -> false
[] === []
// -> false
```

## Concepts

オブジェクトリテラルこと`ObjectLiteral`は以下のように定義します。

```typescript
type Primitive = undefined | null | boolean | number | string;
type PlainObject = {
  [key: string]: PlainObjectItem;
};
type ObjectLiteral = PlainObject | ReadonlyArray<PlainObjectItem>;
type PlainObjectItem = Primitive | ObjectLiteral;
```

* `NaN`はプリミティブ値として考慮しなくても構いません
    * プリミティブ型はすべて等値比較できるものとします
* オブジェクトの入れ子を考慮する必要があります
    * 循環参照を考慮する必要はありません

## Conditions

* `JSON.stringify(), JSON.parse()`を使ってはいけません
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`ObjectEquality.spec.ts`があるので参照してください。

```
yarn test
```