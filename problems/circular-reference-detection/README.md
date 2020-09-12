# Circular reference detection

オブジェクトには循環参照という概念があります。

```typescript
const obj1: any = {};
const obj2: any = {
  obj: obj1
};
obj1.obj = obj2;
```

この状態では`obj1.obj`は`obj2`を、`obj1.obj.obj`は`obj1`自身を指します。このように無限に参照ができるものが循環参照です。

循環参照をしているオブジェクトを走査すると、アルゴリズム次第では走査が終わらなくなることがあります。

## Implementation

ある`object`型の値が与えられたときにそれが循環参照をしているどうかを判定する関数`circular()`を実装してください。

## Examples

```typescript
circular({});
// -> false

circular({
  w: {}
});
// -> false

circular({
  w: {
    w: {}
  }
});
// -> false

const obj1: any = {};
const obj2: any = {
  w: obj1
};
obj1.w = obj2;

circular(ob1);
// -> true
circular(ob2);
// -> true
```

## Concepts

* 無限に循環参照を走査してください
    * n回以上入れ子になったら循環参照とする。といった定義しないでください
    * 言語の都合上stack overflowを起こすことがありますが、今回はそれを考慮しなくてかまいません
        * 非同期処理に変更するとこのoverflowを回避できることがあります

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

`Circular.spec.ts`があるので参照してください。

```
yarn test
```