const NUMBER_REGEXP: RegExp = /\d*/u;

export class DecimalPart {
  public readonly name: 'DecimalPart' = 'DecimalPart';
  private readonly value: string;

  public static of(value: string): DecimalPart {
    if (NUMBER_REGEXP.test(value)) {
      return new DecimalPart(value);
    }

    throw new Error('IT CANNOT TO BE CONVERTED TO NUMBER');
  }

  protected constructor(value: string) {
    this.value = value;
  }

  public getValue(): number {
    if (this.value.length === 0) {
      return 0;
    }

    return Number(this.value);
  }

  public toString(): string {
    return this.value;
  }
}
