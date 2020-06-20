# Functional switch

## Requirements

1. `sw()` で開始
1. `case()` について
    1. `case()` の引数は `CONSTANT_VALUE` , `FALL_THROUGH` , `SUPPLIER` となっている。第2引数の `FALL_THROUGH` は省略が可能で、省略時は第2引数が `SUPPLIER` になる
    1. `FALL_THROUGH` について
        1. 初期値は `false`
        1. `true` を設定すると、次に `false` (省略時の初期値を含む)を指定している `case()` まで全ての `case()` を実施する
    1. `SUPPLIER` について
        1. `type Supplier<R> = () => R` の形の関数を `SUPPLIER` という
        1. `SUPPLIER` で `return` をすればその値が `sw()` の戻り値になる
1. `default()` について
    1. どの `case()` にも当てはまらなかったときに実行される
    1. 第1引数は `SUPPLIER`
    1. `SUPPLIER` で `return` をすればその値が `sw()` の戻り値になる  
        ( `case()` と同じ)
    1. `default()` のうしろに `case()` をつけることはできない

## Advanced

1. 同じ値を `CONSTANT_VALUE` に設定することができないようにする
1. `CONSTANT_VALUE` に `Array` を設定できるようにする
1. `Promise` に対応している。 `FALL_THROUGH` が設定されているときは、同時実行ではなく順次実行する
1. `recover()` を実装する。 `recover()` は `case()` または `default()` のうしろにつけることが可能で、これをつけると `case()` , `default()` で発生した例外を全て補足でき、第1引数にそのインスタンスがくる
    1. 第1引数は `type UnaryFunction<E, R> = (err: E) => R` の `UNARY_FUNCTION`
    1. `recover()` のうしろに `case()` , `default()` をつけることはできない
    1. `return` をすればその値が `sw()` の戻り値になる ( `case()` , `default()` と同じ)

### Overview

```typescript
sw(VARIABLE)
  .case(CONSTANT_VALUE1, FALL_THROUGH, () => {
    // ...
  })
  .case(CONSTANT_VALUE2, FALL_THROUGH, () => {
    // ...
  })
  .case(CONSTANT_VALUE3, () => {
    // ...
  })
  .case(CONSTANT_VALUE4, () => {
    // ...
  })
  .default(() => {
    // ...
  })
  .recover((err) => {
    //
  });
```

### Examples

以下ではこの `type aliases` を使用します

```typescript
type DayOfWeek =
  SUNDAY |
  MONDAY |
  TUESDAY |
  WEDNESDAY |
  THURSDAY |
  FRIDAY |
  SATURDAY;
```

#### `FALL_THROUGH = true`

```typescript
sw(MONDAY)
  .case(SUNDAY, true, () => {
    console.log('SUNDAY');
  })
  .case(MONDAY, true, () => {
    console.log('MONDAY');
  })
  .case(TUESDAY, true,() => {
    console.log('TUESDAY');
  })
  .case(WEDNESDAY, true,() => {
    console.log('WEDNESDAY');
  })
  .case(THURSDAY, () => {
    console.log('THURSDAY');
  })
  .case(FRIDAY, true, () => {
    console.log('FRIDAY');
  })
  .case(SATURDAY, true, () => {
    console.log('SATURDAY');
  });

// ->
// 'MONDAY'
// 'TUESDAY'
// 'WEDNESDAY'
// 'THURSDAY'
```

#### `the same CONSTANT_VALUE`

```typescript
sw(THURSDAY)
  .case(SUNDAY, () => {
    console.log('SUNDAY');
  })
  .case(MONDAY, () => {
    console.log('MONDAY');
  })
  .case(TUESDAY, () => {
    console.log('TUESDAY');
  })
  .case(WEDNESDAY, () => {
    console.log('WEDNESDAY');
  })
  .case(THURSDAY, () => {
    console.log('THURSDAY');
  })
  .case(FRIDAY, () => {
    console.log('FRIDAY');
  })
  .case(SATURDAY, () => {
    console.log('SATURDAY');
  })
  .case(SUNDAY, () => {
    console.log('SUNDAY');
  });

// -> SUNDAY is duplicated
```

#### `CONSTANT_VALUE is Array`

```typescript
sw(THURSDAY)
  .case([SUNDAY, MONDAY], () => {
    console.log('SUNDAY AND MONDAY');
  })
  .case([TUESDAY, WEDNESDAY], () => {
    console.log('TUESDAY AND WEDNESDAY');
  })
  .case([THURSDAY, FRIDAY], () => {
    console.log('THURSDAY AND FRIDAY');
  })
  .case(SATURDAY, () => {
    console.log('SATURDAY');
  });

// ->
// 'THURSDAY AND FRIDAY'
```

#### `Promise` is applicable

```typescript
sw(THURSDAY)
  .case(SUNDAY, true, async () => {
    await wait(30, 'seconds');
    console.log('SUNDAY');
  })
  .case(MONDAY, true, async () => {
    await wait(25, 'seconds');
    console.log('MONDAY');
  })
  .case(TUESDAY, true, async () => {
    await wait(20, 'seconds');
    console.log('TUESDAY');
  })
  .case(WEDNESDAY, true, async () => {
    await wait(15, 'seconds');
    console.log('WEDNESDAY');
  })
  .case(THURSDAY, true, async () => {
    await wait(10, 'seconds');
    console.log('THURSDAY');
  })
  .case(FRIDAY, true, async () => {
    await wait(5, 'seconds');
    console.log('FRIDAY');
  })
  .case(SATURDAY, true, async () => {
    await wait(0, 'seconds');
    console.log('SATURDAY');
  })
  .case(SUNDAY, true, () => {
    console.log('SATURDAY');
  });

// ->
// 10 seconds
// 'THURSDAY'
// 5 seconds
// 'FRIDAY'
// immediately
// 'SATURDAY'
// immediately
// 'SUNDAY'
```

## 注意

* 他のパッケージを使ってはいけません

## テスト

テストファイルは提供されません。