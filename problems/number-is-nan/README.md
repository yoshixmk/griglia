# Number is `NaN`

TypeScriptの`number`型には`NaN`という値があります。

この値は`number`型でありながら、他のいかなる`number`型の値との比較も`false`を返す、等値比較ができない値です。

## Implementation

ある`unknown`型の値が与えられたときに、それが `NaN`であるかどうかを判定する関数 `nan()`を実装してください。

## Examples

```typescript
nan(undefined);
// -> false
nan(null);
// -> false
nan(true);
// -> false
nan(1);
// -> false
nan(-0);
// -> false
nan(-1);
// -> false
nan(-1.01);
// -> false
nan(Infinity);
// -> false
nan(-Infinity);
// -> false
nan(NaN);
// -> true
nan('');
// -> false
nan('i');
// -> false
nan(Symbol());
// -> false
nan(0n);
// -> false
nan({});
// -> false
```

## Concepts

* プログラムの問題というよりは読解力の問題です

## Conditions

* `isNaN()`,`Number.isNaN()`を使ってはいけません
    * 問題の意義が崩壊します
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`NaN.spec.ts`があるので参照してください。

```
yarn test
```