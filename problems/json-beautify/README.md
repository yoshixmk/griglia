# JSON beautify

JSONをきれいに表示します。

`JSON.stringify()`でオブジェクトをstringにするとすべて圧縮されてしまいます。

```typescript
const json: unknown = {
  'glossary': {
    'title': 'example glossary',
    'GlossDiv': {
      'title': 'S',
      'GlossList': {
        'GlossEntry': {
          'ID': 'SGML',
          'SortAs': 'SGML',
          'GlossTerm': 'Standard Generalized Markup Language',
          'Acronym': 'SGML',
          'Abbrev': 'ISO 8879:1986',
          'GlossDef': {
            'para': 'A meta-markup language, used to create markup languages such as DocBook.',
            'GlossSeeAlso': [
              'GML',
              'XML'
            ]
          },
          'GlossSee': 'markup'
        }
      }
    }
  }
};
// -> '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}"
```

人間にとって視認性のある綺麗なJSONを表示します。

## Implementation

関数の`beautify()`を実装してください。  

## Examples

JSONを構成するオブジェクト`ObjectLiteral`は以下のように定義します。

```typescript
type Primitive = undefined | null | boolean | number | string;
type PlainObject = {
  [key: string]: PlainObjectItem;
};
type ObjectLiteral = PlainObject | ReadonlyArray<PlainObjectItem>;
type PlainObjectItem = Primitive | ObjectLiteral;
```

以下は出力の一例です。

```typescript
const json1: ObjectLiteral = {
  isActive: true,
  age: 23,
  phone: undefined
  name: 'Wall Greene',
  email: null,
};

beautify(json1);
// ->
// {
//   "isActive": true,
//   "age": 23,
//   "name": "Wall Greene",
//   "email": null
// }

const json2: ObjectLiteral = [
  true,
  23,
  undefined,
  'Wall Greene',
  null,
];

beautify(json2);
// ->
// [
//   true,
//   23,
//   "Wall Greene",
//   null
// ]

const json3: ObjectLiteral = {};
beautify(json3);
// ->
// {}

const json4: ObjectLiteral = [];
beautify(json4);
// ->
// []

const json5: ObjectLiteral = [
  [
    [
      []
    ]
  ]
];

beautify(json5);
// ->
// [
//   [
//     [
//       []
//     ]
//   ]
// ]
```

## Concepts

1. 表を構成する基本的な要素は以下です
    * インデントは` `(半角空白)2文字としますが、変更できるようにしてください
        * オブジェクトと配列でインデントレベルを1あげます
            * オブジェクト、配列が要素を持っていない場合はレベルを上げず、また対応する閉じカッコを改行せず書きます
    * number型の`NaN, Infinity, -Infinity, -0`は考慮しなくてかまいません
    * string型に`"`が含まれるときはそれをエスケープする必要があります
    * `undefined`が値の場合は、そのキー自体を表示しないようにしてください
1. 循環参照しているオブジェクトを考慮する必要はありません

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

テストファイルは提供されません。