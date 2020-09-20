# Semantic versioning

`Semantic versioning`というバージョン表記方法があります。これは0と正の整数を3つ、`.`区切りで書いたものを指します。

```
x.y.z
```

`x, y, z`ともに`0`以上の整数であれば`10.11.12`のような1ケタ以上の数値でも問題ありません。

## Implementation

`string`型の値が与えられたときに、それを解析して`SemVer`というクラスを作るためのファクトリ`SemVerFactory`を実装してください。  
また、そのインスタンスの`SemVer`を実装してください。

## Concepts

* 好ましくない`string`が与えられる可能性があるので例外処理を徹底してください
* `SemVer`は他の`SemVer`と比較ができます
    * `IVersion`がそのインターフェイスになので実装する必要があります

## Conditions

* 実装するクラス`SemVer`は`IVersion`を実装してください
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`SemVerFactory.spec.ts`があるので参照してください。

```
yarn test
```