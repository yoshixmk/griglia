export interface NumeralSystem {
  getValue(): number;

  stringify(): string;
}

// 方式は、数値から文字列の、組み立て方法だけを書く。

// 方式はbaseクラス作る（方式base）。数値を持たせる

// 区切りのロジックは外だし。方式baseに持たせる。

// 方式は、ファクトリークラスを経由して作られる


// private static singleton: Singleton = new Singleton;

// private constructor() {
//   console.log('インスタンスを生成しました。');
// }

// public static getInstance(): Singleton {
//   return Singleton.singleton;
// }
