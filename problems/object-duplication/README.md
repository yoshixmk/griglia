# Object Duplication

JavaScript, TypeScriptにおける `Plain Object (Plain Old Javascript Object)` を複製するメソッド `duplicate` を実装してください。

なお `Plain Object` は以下のように定義されているとします。

```typescript
type Primitive = undefined | null | boolean | number | string;
type PlainObject = {
  [key: string]: Item;
};
type Item = Primitive | PlainObject | ArrayLike<Item>;
```

## 注意

* 他のパッケージを使ってはいけません
* `JSON.stringify(), JSON.parse()` を使ってはいけません

## テスト

テストファイルは提供されません。