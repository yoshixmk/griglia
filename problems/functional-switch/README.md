# Functional switch

`switch`を関数で実装します。

switchとは以下の構文です。

```typescript
switch (value) {
  case value1:
    // ...
    break;
  case value2:
    // ...
    break;
  default:
    // ...
}
```

## Implementation

関数の`sw()`を実装してください。  
ただし、戻り値が`unknown`で曖昧になっているため書き換える必要があります。

### Examples

```typescript
sw(2)
  .case(0, () => {
    return 'zero';
  })
  .case(1, () => {
    return 'one';
  })
  .case(2, () => {
    return 'two';
  })
  .case(3, () => {
    return 'three';
  })
  .default(() => {
    return 'other';
  });
// -> 'two'
```

## Concepts

1. `sw()`で開始します
1. `case()`の第1引数の値と一致すると第2引数の関数を実施し、戻り値を返却します
    * 一般的な`switch`と異なり、条件に合致したらそれより下の`case()`を実行する必要はありません
1. `default()`はどの`case()`にも条件が合致しなかったときに実行され、戻り値を返却します
    * `default()`のうしろに`case()`をつけることができないように実装してください
1. `case()`のシグネチャを以下に変更して下さい
    * `case<T>(value: number, fallthrough: boolean | () => T, supplier?: () => T)`
        * 第2引数に`true`が与えられたときは、たとえ第3引数が実行されてもそこで処理を終わらせず、次の`case()`を実行します
            * `false`が指定されたときと従来どおり関数が与えられたときは以前と変わりません
1. Union typesを指定して同じ値の`case()`を作れないようにしてください。

### Examples again

```typescript
type DayOfWeek =
  'SUNDAY' |
  'MONDAY' |
  'TUESDAY' |
  'WEDNESDAY' |
  'THURSDAY' |
  'FRIDAY' |
  'SATURDAY';

sw('MONDAY')
  .case('SUNDAY', true, () => {
    return 'dimanche';
  })
  .case('MONDAY', true, () => {
    return 'lundi';
  })
  .case('TUESDAY', true,() => {
    return 'mardi';
  })
  .case('WEDNESDAY', true,() => {
    return 'mercredi';
  })
  .case('THURSDAY', () => {
    return 'jeudi';
  })
  .case('FRIDAY', true, () => {
    return 'vendredi';
  })
  .case('SATURDAY', true, () => {
    return 'samedi';
  });

// ->
//  'lunci'
//  'mardi'
//  'mercredi'
//  'jeudi'
```
## Conditions

* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

テストファイルは提供されません。