# JSON beautify

## Not Ready

`JSON.parse()`でオブジェクトをstringにするとすべて圧縮される。

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

これをきれいに表示したい

* `NaN, Infinity, -Infinity`は考えない
* `-0`は`0`にする
* `Symbol, BigInt`は考えない
* `undefined`が値の場合は、そのキー自体を表示しない
