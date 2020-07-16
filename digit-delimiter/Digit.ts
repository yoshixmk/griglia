export class Digit {
  private num: number;

  public constructor(num: number) {
    this.num = num;
  }

  public stringify(): string {
    return `${this.num}`;
  }
}
