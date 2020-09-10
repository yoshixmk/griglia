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

循環参照をしているオブジェクトを走査すると、アルゴリズム次第では無限に走査が終わらなくなることがあります。

## Implementation

ある`object`型の値が与えられたときにそれが循環参照をしているどうかを判定する関数`circular()`を実装してください。

## Concepts

* n回以上入れ子になったら循環参照とする。といった定義はできません
    * 無限に循環参照を走査してください

## Conditions

* `JSON.stringify(), JSON.parse()`を使ってはいけません
* 他のパッケージを使ってはいけません

## Tests

`Circular.spec.ts`があるので参照してください。

```
yarn test
```