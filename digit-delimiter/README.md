# Digit Delmiter

以下は拡張性のあるコードをかけるかどうかの問題です。改良する基となるクラスは `Degit.ts` です。

数字をただ書くだけだと何桁あるのかがわかりにくいのはおわかりいただけると思います。そこで、今回は数字を区切って出力する `Digit.ts` を作成します。

以下の条件に合うような出力メソッドを持つ `Digit.ts` を作成してください。出力に使用するメソッドの名前、引数は自由ですが、戻り値は `string` にしてください。例では出力メソッドは `stringify()` という名前になっています。

## 日米方式

1. 小数点は `.`
1. 整数は3ケタ区切りで `,` を挿入する

*例*

```typescript
const num: string = 123456.789;

const digit: Digit = new Digit(num);

console.log(digit.stringify());
// 123,456.789
```

## 西欧方式

1. 小数点は `,`
1. 整数は3ケタ区切りで `.` を挿入する

*例*

```typescript
const num: string = 123456.789;

const digit: Digit = new Digit(num);

console.log(digit.stringify());
// 123.456,789
```

## インド方式

1. 小数点は `.`
1. 整数は2ケタ目で `,` を、以降は3ケタ区切りで `,` を挿入する

*例*

```typescript
const num: string = 123456.789;

const digit: Digit = new Digit(num);

console.log(digit.stringify());
// 1,234,56.789
```

## 注意

* 他のパッケージを使ってはいけません

## テスト

テストファイルは提供されません。