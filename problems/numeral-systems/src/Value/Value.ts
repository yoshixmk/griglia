import { DecimalPoint } from './DecimalPoint';
import { DigitDelimiter } from './DigitDelimiter';
import { NumericalSign } from './NumericalSign';
import { DecimalPart } from './Part/DecimalPart';
import { IntegerPart } from './Part/IntegerPart';

export class Value {
  private readonly integer: IntegerPart;
  private readonly decimal: DecimalPart;
  private readonly sign: NumericalSign;
  private readonly point: DecimalPoint;
  private readonly delimiter: DigitDelimiter;

  public static of(integer: IntegerPart, decimal: DecimalPart, sign: NumericalSign, point: DecimalPoint, delimiter: DigitDelimiter): Value {
    return new Value(integer, decimal, sign, point, delimiter);
  }

  protected constructor(integer: IntegerPart, decimal: DecimalPart, sign: NumericalSign, point: DecimalPoint, delimiter: DigitDelimiter) {
    this.integer = integer;
    this.decimal = decimal;
    this.sign = sign;
    this.point = point;
    this.delimiter = delimiter;
  }

  public getInteger(): IntegerPart {
    return this.integer;
  }

  public getDecimal(): DecimalPart {
    return this.decimal;
  }

  public getSign(): NumericalSign {
    return this.sign;
  }

  public getPoint(): DecimalPoint {
    return this.point;
  }

  public getDelimiter(): DigitDelimiter {
    return this.delimiter;
  }

  public getValue(): number {
    return Number(`${this.integer.toString()}.${this.decimal.toString()}`);
  }
}
