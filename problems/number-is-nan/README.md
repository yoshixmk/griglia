# Number is `NaN`

TypeScriptの`number`型には`NaN`という値があります。

この値は`number`型でありながら、他のいかなる`number`型の値との比較も`false`を返す、等値比較ができない値です。

## Implementation

ある`unknown`型の値が与えられたときに、それが `NaN`であるかどうかを判定する関数 `nan()`を実装してください。

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