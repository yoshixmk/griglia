# Object Duplication

JavaScript, TypeScriptにおける `Plain Object (Plain Old Javascript Object)` を複製するメソッド `duplicate` を実装してください。

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

## テスト

テストファイルは提供されません。