# Semantic Versioning

セマンティックバージョニングというバージョン表記方法があります。

## `x.y.z`

`x, y, z` ともに `0` 以上の整数であれば `10.11.12` のような1ケタ以上の数値でも問題ありません。

ここで `string` が与えられたときに、それをパースして `SemVer` というクラスを作るためのファクトリメソッド `SemVer.ofString()` を作成してください。

なおクラス `SemVer` は同梱している `IVersion` を実装してください。なお、すでにあるパッケージを使ってはいけません。

### 採点の基準

* エラーに関する適切な処理
* `OOP` ができているか

### RUN

```bash
deno test semantic-versioning/SemVer.spec.ts
```