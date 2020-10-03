export interface NumberRange {
  isValid(num: number): boolean;

  add(num: number): void;

  remove(num: number): void;

  serialize(): string;
}

// 連続する数字幅
const RANGE_SIZE = 3;
export class IntegerRange implements NumberRange {
  private values: number[] = [];
  private bottom: number;
  private top: number;

  constructor(rangeStr: string, bottom = 0, top = 20) {
    this.bottom = bottom;
    this.top = top;

    // TODO create Factory
    const splitedWords = rangeStr.split(", ");
    const firstWord = splitedWords[0];
    if (firstWord.startsWith("- ")) {
      this.addValues(bottom, parseInt(firstWord.replace(/-\s+/ug, "")));
    }

    splitedWords
      .filter((word) => word.includes(" - "))
      .forEach((word) => {
        const splited = word.split(/\s+-\s+/ug);
        this.addValues(parseInt(splited[0]), parseInt(splited[1]));
      });

    splitedWords
      .filter((word) => !word.includes("-"))
      .forEach((v) => this.values.push(parseInt(v)));

    const lastWord = splitedWords[splitedWords.length - 1];
    if (lastWord.endsWith(" -")) {
      this.addValues(parseInt(lastWord.replace(/\s+-/ug, "")), top);
    }
  }

  // TODO objective
  private addValues(start: number, end: number): void {
    for (let i = start; i <= end; i++) {
      this.values.push(i);
    }
  }

  isValid(num: number): boolean {
    return this.values.includes(num);
  }

  add(num: number): void {
    this.values.push(num);
    this.values.sort();
  }

  remove(num: number): void {
    this.values = this.values.filter((n) => n !== num);
  }

  serialize(): string {
    // 最後にjoinして、serialize
    // bottom~数えて、3つ以上なら、「- X」形式
    let bottomText = this.createBottomText();
    // top~数えて、3つ以上なら「X -」形式
    let topText = this.createTopText();
    let middleText = "";

    // const temp: (number | string)[] = [];





    // valuesで
    // 連続する数字
    // let consecutiveNumbers: number[] = [];
    // let previousNum = this.values[0];
    // for (let i = 0; i <= this.values.length; i++) {
    //   const num = this.values[i];
    //   if (previousNum === num - 1) {
    //     consecutiveNumbers.push(num);
    //   } else {
    //     if (consecutiveNumbers.length >= 3) {
    //       if (consecutiveNumbers.length >= 4) {
    //         temp.unshift();
    //       }
    //       temp.push(`${consecutiveNumbers[0]} - ${consecutiveNumbers[consecutiveNumbers.length - 1]}`)
    //     } else {
    //       temp.push(...consecutiveNumbers);
    //     }
    //     consecutiveNumbers = [];
    //     consecutiveNumbers.push(num);
    //   }
    //   previousNum = num;
    // }

    // let result = temp.join(", ")
    // // console.log(result)
    // result = result.replace(/^0\s+-\s+/ug, '')
    // // console.log(result)
    // return result;

    return [bottomText, middleText, topText].filter(s => s !== '').join(', ');
  }

  private createBottomText() {
    if (this.values[0] !== this.bottom) {
      return "";
    }

    let previousNum = this.bottom;
    for (let i = 1; i < this.values.length; i++) {
      const num = this.values[i];

      if (num - this.bottom + 1 >= RANGE_SIZE) {
        if (num !== previousNum + 1) {
          return `- ${previousNum}`;
        }
        if (i + 1 === this.values.length) {
          return `- ${num}`;
        }
      }

      previousNum = this.values[i];
    }
    return "";
  }

  private createTopText() {
    if (this.values[this.values.length - 1] !== this.top) {
      return "";
    }

    let previousNum = this.top;
    for (let i = this.values.length - 1 - 1; 0 <= i; i--) {
      const num = this.values[i];
      if (this.top - num + 1 >= RANGE_SIZE) {
        if (num !== previousNum - 1) {
          return `${previousNum} -`;
        }
        if (i === 0) {
          return `${num} -`;
        }
      }

      previousNum = this.values[i];
    }
    return "";
  }

  getValue(): number[] {
    return this.values;
  }
}
