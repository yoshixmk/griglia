# Interface generator

クラスが記載されている`.ts`ファイルを読み込みそのクラスのインターフェイスを出力します。

## Implementation

TypeScriptのファイルを読み込むとその中にあるクラスをインターフェイスにして別ファイルに保存する関数`unimplement()`を実装してください。`

## Examples

インターフェイスとは以下のような形で表されます。

* `interface`で宣言される
* アクセス修飾子を書かない
    * `public, protected, private`がない
    * アクセス修飾子はないが、すべて`public`として扱う
* コンストラクタがない
* プロパティ、コンストラクタ、メソッドは宣言しかない
* 他のインターフェイスを継承する場合は`extends`とする

`sample`にある`Objet.ts`はabstract classです。このクラスをインターフェイスにすると以下になります。

```typescript
import { Nominative } from './Nominative';

export interface IObjet<T extends IObjet<T, N>, N extends string = string> extends Nominative<T, N> {
  readonly noun: N;

  equals(other: T): boolean;

  serialize(): string;

  hashCode(): string;

  toString(): string;
}
```

## Concepts

* 読み込むファイルはTypeScriptのファイルに限ります
    * 拡張子は`ts`のみで、それ以外を考慮する必要はありません
* 読み込むファイルには必ず、ひとつだけクラスがあるものとします
    * 複数のクラスがあるファイルを考慮する必要はありません
* インターフェイスのファイル名、インターフェイス名はその名称の先頭に`I`を付加してください
    * 例えば`Isabel.ts`に`Isabel`というクラスがあれば生成されるインターフェイスは`IIsabel.ts`で`IIsabel`です
* インターフェイスは読み込んだファイルから`./Interface`の場所に生成してください
    * 生成したインターフェイスは、元のクラスが参照していた`import`をファイルパスを解決して引き継いでください
* 元のクラスにそのインターフェイスを実装させてください
    * アクセス修飾子`public`を付与してください
    * abstract classの場合はabstract methodとして宣言してください

## Conditions

* すべてを実装する必要はありません
    * できるだけ上から実装してください
* ファイル読み込みは表示パッケージの`fs`を使う必要があります
    * 標準ライブラリの他パッケージで読み込みたいときはそれを使ってもかまいません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

テストファイルは提供されません。