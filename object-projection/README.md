# JavaScript と TypeScript の `Map` について

## 前提

### オブジェクトの等値比較

一般的に、オブジェクトはどの言語でも等値比較が思うようにいきません。

```typescript
console.log({} === {});
// false
```

この例はJavaScript, TypeScriptですが、他の言語でも大体同じはずです。

### オブジェクトリテラル

TypeScriptではオブジェクトは `{}` で囲み `key` を `string` あるいは `number` で定義すれば作ることができます。 ちなみに `number` を `key` とするオブジェクトは配列のことです。今回は `string` に限り紹介します。

```typescript
const json = {
  id: '23aaa2c7-feba-495f-9b50-cf33c7fdf57d',
  genre: 'Panda',
  age: 25,
  validUntil: '2030-01-02 11:12:13'
};
```

このオブジェクトを他の言語でいうところの `Dictionary` または `Associative array` として使うこともありますが、実はそれ用に使える `Map` というクラスが存在します。

### `Map`

`Map` は上記のオブジェクトリテラルとは異なり、クラスをインスタンス化して使用します。以下はJavaScriptでの宣言です。

```javascript
const map = new Map();
```

TypeScriptではこの宣言は完全ではなく、 `key` とする型と `value` とする型の2型を `generic` として与えます。型定義を見るとこの `key` と `value` の頭文字をとった `generic` が設定されています。

```typescript
interface Map<K, V> {
  ...
}
```

実際に使うときにこの `K, V` を使用したい型に合わせます。

```typescript
const map: Map<string, number> = new Map<string, number>();
```

### オブジェクトリテラルと何が違うのか

速度など細かい差はあるようですが、見てわかる差があります。それはオブジェクトリテラルは `number` あるいは `string` のみを `key` として受け付けると述べましたが、 `Map` は全ての型を `key` として受けることができます。

```typescript
const map1: Map<boolean, Item> = new Map<boolean, Item>();
const map2: Map<number, Item> = new Map<number, Item>();
const map3: Map<string, Item> = new Map<string, Item>();
```

これは、クラスを `key` として使うこともできます。

```typescript
const map4: Map<School, Item> = new Map<School, Item>();
const map5: Map<Hair, Item> = new Map<Hair, Item>();
```

### でも思うようにいかない

クラスを `key` に設定しても、実は思うようにいきません。これはその `key` が存在するかをTypeScriptはつまるところ等値比較するためです。 例えば `map.has(key: K): boolean` はその `key` が存在するかを `boolean` で返却しますが、以下のような例は意図する内容にはなりません。

```typescript
const number1: NumberWrapper = new NumberWrapper(1);
const number2: NumberWrapper = new NumberWrapper(1);

const map: Map<NumberWrapper, Item> = new Map<NumberWrapper, Item>();

map.set(number1, item);

console.log(map.has(number1));
// true
console.log(map.has(number2));
// false
```

## やりたいこと

クラスを `key` として使うことができて、しかもそれが同一オブジェクトでなくても意図する内容が同じであれば `map.has()` が `true` を返却するようなクラス `MapMap` を作ってください。このときどんなクラスでも `key` にできる必要はなく、ある程度制約が必要であれば作ってもらってもかまいませんが、その制約は `interface` である `IKey.ts` に作ってください。 また `MapMap` はTypeScriptが提供している `Map` の `interface` を必ず実装してください。

## `Map` の各メソッドの計算量

`Map` の各メソッドの計算量は以下です。 `MapMap` もこの計算量以下になるように製作してください。

```typescript
map.clear() -> O(1)
map.delete() -> O(1)
map.forEach() -> O(n)
map.get() -> O(1)
map.has() -> O(1)
map.set() -> O(1)
map.size -> O(1)
```

## 知っておくといい概念

### `Value object`

タイプセーフやカプセル化することが目的で使われるオブジェクトです。

## テスト

最低限以下は問題なく動作することを確認してください。なお以下に `key`, `value` として登場する `Key`, `Value` クラスはあくまでも例であり、この名前である必要も、実装にこだわる必要もありません。ただし `key` となるクラスに対して制約として `interface` を用意した場合は相応の実装をしてください。

### RUN

```bash
deno test object-projection/__tests__/MapMap.spec.ts
```