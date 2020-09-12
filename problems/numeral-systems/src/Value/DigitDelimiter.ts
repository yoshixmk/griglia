type Point = '.' | ',';

export class DigitDelimiter {
  private readonly point: Point;

  public static readonly DOT: DigitDelimiter = new DigitDelimiter('.');
  public static readonly COMMA: DigitDelimiter = new DigitDelimiter(',');

  private constructor(point: Point) {
    this.point = point;
  }

  public getPoint(): Point {
    return this.point;
  }

  public toString(): string {
    return this.point;
  }
}
