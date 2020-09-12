type Sign = '+' | '-' | '';

export class NumericalSign {
  private readonly sign: Sign;

  public static readonly PLUS: NumericalSign = new NumericalSign('+');
  public static readonly MINUS: NumericalSign = new NumericalSign('-');
  public static readonly NONE: NumericalSign = new NumericalSign('-');

  public static of(sign: string | null): NumericalSign {
    switch (sign) {
      case '+':
        return NumericalSign.PLUS;
      case '-':
        return NumericalSign.MINUS;
      case '':
      case null:
      default: {
        return NumericalSign.NONE;
      }
    }
  }

  private constructor(sign: Sign) {
    this.sign = sign;
  }

  public getSign(): Sign {
    return this.sign;
  }

  public toString(): string {
    return this.sign;
  }
}
