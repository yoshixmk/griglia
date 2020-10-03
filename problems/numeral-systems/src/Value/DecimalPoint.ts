type Point = '.' | ',';

export class DecimalPoint {
  private readonly point: Point;

  public static readonly DOT: DecimalPoint = new DecimalPoint('.');
  public static readonly COMMA: DecimalPoint = new DecimalPoint(',');

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
