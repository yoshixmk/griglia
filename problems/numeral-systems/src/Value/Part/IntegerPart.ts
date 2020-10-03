const NUMBER_REGEXP: RegExp = /\d+/u;

export class IntegerPart {
  public readonly name: 'IntegerPart' = 'IntegerPart';
  private readonly value: string;

  public static of(value: string): IntegerPart {
    if (NUMBER_REGEXP.test(value)) {
      return new IntegerPart(value);
    }

    throw new Error('IT CANNOT TO BE CONVERTED TO NUMBER');
  }

  protected constructor(value: string) {
    this.value = value;
  }

  public getValue(): number {
    return Number(this.value);
  }

  public toString(): string {
    return this.value;
  }
}
