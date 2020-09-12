import { ANumeralSystem } from './ANumeralSystem';
import { DecimalPoint } from './Value/DecimalPoint';
import { DigitDelimiter } from './Value/DigitDelimiter';
import { NumericalSign } from './Value/NumericalSign';
import { DecimalPart } from './Value/Part/DecimalPart';
import { IntegerPart } from './Value/Part/IntegerPart';
import { Value } from './Value/Value';

const NUMBER_EXPRESSION: RegExp = /^([+-]?)(\d+)\.?(\d*)$/u;

export class AmericanNumeralSystem extends ANumeralSystem {
  public static of(value: Value): AmericanNumeralSystem {
    return new AmericanNumeralSystem(value);
  }

  public static ofNumber(value: number): AmericanNumeralSystem {
    return AmericanNumeralSystem.ofString(`${value}`);
  }

  public static ofString(value: string): AmericanNumeralSystem {
    const array: RegExpExecArray | null = NUMBER_EXPRESSION.exec(value);

    if (array === null) {
      throw new Error(`THIS STRING IS NOT AMERICAN STYLE: ${value}`);
    }
    if (array[0].endsWith(DecimalPoint.DOT.getPoint())) {
      throw new Error(`THIS STRING IS NOT AMERICAN STYLE: ${value}`);
    }

    return AmericanNumeralSystem.of(
      Value.of(
        IntegerPart.of(array[2]),
        DecimalPart.of(array[3]),
        NumericalSign.of(array[1]),
        DecimalPoint.DOT,
        DigitDelimiter.COMMA
      )
    );
  }

  protected constructor(value: Value) {
    super(value);
  }

  public stringify(): string {
    return `${this.integerPart()}${this.decimalPart()}`;
  }

  private decimalPart(): string {
    const decimal: string = this.value.getDecimal().toString();

    if (decimal === '' || decimal === '0') {
      return '';
    }

    return `${this.value.getPoint().getPoint()}${decimal}`;
  }

  private integerPart(): string {
    const integer: string = this.value.getInteger().toString();
    const reversed: Array<string> = integer.split('').reverse();

    return this.delimiterize(reversed).reverse().join('');
  }

  private delimiterize(reversedInteger: Array<string>): Array<string> {
    if (reversedInteger.length === 0) {
      return [];
    }

    const [o, t, h, ...rest] = reversedInteger;
    const concat: string = `${this.oneletter(o)}${this.oneletter(t)}${this.oneletter(h)}`;

    if (concat.length !== 3) {
      return [concat];
    }

    return [concat, this.value.getDelimiter().getPoint(), ...this.delimiterize(rest)];
  }

  private oneletter(str?: string): string {
    if (typeof str === 'undefined') {
      return '';
    }

    return str;
  }
}
