# Tablify

オブジェクトをテーブル表示します。

あるオブジェクトリテラルが与えられたときに、それを項目と内容で表記します。

## Implementation

関数の`tablify()`を実装してください。  

## Examples

テーブル表記に使うオブジェクト`Table`は以下のように定義します。

```typescript
type TableRow = Readonly<{
  [key: string]: string | number | boolean | null;
}>;

type Table = TableRow | ReadonlyArray<TableRow>;
```

オブジェクト`Table`が与えられたときの出力の一例を列挙します。

```typescript
const table1: Table = {
  un: 1,
  deux: 2
};

tablify(table1);
// +----+------+
// | un | deux |
// +----+------+
// |  1 |    2 |
// +----+------+

const table2: Table = [
  {
    un: 1,
    deux: 2
  },
  {
    un: true,
    deux: null
  }
];

tablify(table2);
// +------+------+
// | un   | deux |
// +------+------+
// |    1 |    2 |
// +------+------+
// | true | null |
// +------+------+

const table3: Table = [
  {
    un: 1,
    deux: 2
  },
  {
    un: 1,
    trois: 3
  }
];

tablify(table3);
// +----+------+-------+
// | un | deux | trois |
// +----+------+-------+
// |  1 |    2 |       |
// +----+------+-------+
// |  1 |      |     3 |
// +----+------+-------+
```

## Concepts

1. 表を構成する基本的な要素は以下です
    * 表の縦を`|`とします
    * 表の横を`-`とします
    * 表の縦と横が交わるところを`+`とします
    * `true, null`は4文字、`false`は5文字です
        *  マルチバイト文字を考慮する必要はありません
1. 数値を表記するときは右端揃えにしてください
    * string型の数字はこの限りではありません
1. 表示するものがない欄は空欄にしてください
1. 列名を優先表示できるようにします
    * 以下のように`tablify()`のシグネチャを変更してください
    * `tablify = (table: Table, method?: 'sort' | 'emphasis', ...columns: Array<string>) => string`
        1. (`method = 'sort'`のとき)`columns`に合致した列は従来の位置ではなく左端に表示してください
            * このときは安定ソートを選択してください
        1. (`method = 'emphasis'`のとき)`columns`に合致した列の枠線を強調して表示してください 

## Examples again

```typescript
const table: Table = [
  {
    code: 'GR',
    name: 'Greece',
    continent: 'Europe',
    city: 'Athens'
  },
  {
    code: 'BR',
    name: 'Brazil',
    continent: 'America',
    city: 'Sao_Paulo'
  },
  {
    code: 'HU',
    name: 'Hungary',
    continent: 'Europe',
    city: 'Budapest',
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    continent: 'Africa',
    city: 'Addis_Ababa'
  },
];

tablify(table);
// +------+----------+-----------+-------------+
// | code | name     | continent | city        |
// +------+----------+-----------+-------------+
// | GR   | Greece   | Europe    | Athens      |
// +------+----------+-----------+-------------+
// | BR   | Brazil   | America   | Sao_Paulo   |
// +------+----------+-----------+-------------+
// | HU   | Hungary  | Europe    | Budapest    |
// +------+----------+-----------+-------------+
// | ET   | Ethiopia | Africa    | Addis_Ababa |
// +------+----------+-----------+-------------+

tablify(table, 'sort', 'city', 'continent');
// +-------------+-----------+------+----------+
// | city        | continent | code | name     |
// +-------------+-----------+------+----------+
// | Athens      | Europe    | GR   | Greece   |
// +-------------+-----------+------+----------+
// | Sao_Paulo   | America   | BR   | Brazil   |
// +-------------+-----------+------+----------+
// | Budapest    | Europe    | HU   | Hungary  |
// +-------------+-----------+------+----------+
// | Addis_Ababa | Africa    | ET   | Ethiopia |
// +-------------+-----------+------+----------+

tablify(table, 'emphasis', 'city', 'continent');
// +------+----------#===========#=============#
// | code | name     * continent * city        *
// +------+----------#===========#=============#
// | GR   | Greece   * Europe    * Athens      *
// +------+----------#===========#=============#
// | BR   | Brazil   * America   * Sao_Paulo   *
// +------+----------#===========#=============#
// | HU   | Hungary  * Europe    * Budapest    *
// +------+----------#===========#=============#
// | ET   | Ethiopia * Africa    * Addis_Ababa *
// +------+----------#===========#=============#
```

## Conditions

* 他のパッケージを使ってはいけません

### Run playground

```
yarn play
```

## Tests

テストファイルは提供されません。