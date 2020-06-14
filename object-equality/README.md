# Object Equality

JavaScript, TypeScriptにおける `Plain Object (Plain Old Javascript Object)` が同じキー、プロパティを持っているか判定するメソッド `equal` を実装してください。

なお `Plain Object` は以下のように定義されているとします。

```typescript
type Primitive = null | undefined | number | string | boolean;
type PlainObject = {
  [key: string]: Item | ArrayLike<Item>;
};
type Item = Primitive | PlainObject;
```

## 注意

* 他のパッケージを使ってはいけません
* `JSON.stringify(), JSON.parse()` を用いてはいけません

## テスト

テストファイルは提供されません。