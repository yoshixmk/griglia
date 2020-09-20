import { IntegerRange, NumberRange } from "../NumberRange";

describe("NumberRange", () => {
  it("constractor lower-range", () => {
    const expectValue = [0, 1, 2, 3, 4, 5];
    expect(
      new IntegerRange("- 5")
        .getValue(),
    )
      .toStrictEqual(expectValue);
  });

  it("constractor upper-range and single", () => {
    const expectValue = [0, 1, 2, 3, 4, 5, 9];
    expect(
      new IntegerRange("- 5, 9").getValue(),
    )
      .toStrictEqual(expectValue);
  });

  it("constractor double-range", () => {
    const expectValue = [1, 2, 3, 4, 5];
    expect(
      new IntegerRange("1 - 5").getValue(),
    )
      .toStrictEqual(expectValue);
  });

  it("constractor double-range and uppper-range", () => {
    const expectValue = [1, 2, 3, 4, 5, 19, 20];
    expect(
      new IntegerRange("1 - 5, 19 -").getValue(),
    )
      .toStrictEqual(expectValue);
  });

  it("getValue", () => {
    const range: NumberRange = new IntegerRange("- 5, 9");
    expect(range.isValid(3)).toStrictEqual(true);
    expect(range.isValid(4)).toStrictEqual(true);
    expect(range.isValid(5)).toStrictEqual(true);
    expect(range.isValid(6)).toStrictEqual(false);
    expect(range.isValid(7)).toStrictEqual(false);
    expect(range.isValid(8)).toStrictEqual(false);
    expect(range.isValid(9)).toStrictEqual(true);
    expect(range.isValid(10)).toStrictEqual(false);
  });

  it("add", () => {
    const range: IntegerRange = new IntegerRange("- 2, 9");
    range.add(6);
    expect(range.isValid(6)).toStrictEqual(true);
    range.add(7);
    expect(range.isValid(7)).toStrictEqual(true);
    expect(range.getValue()).toStrictEqual([0, 1, 2, 6, 7, 9]);
  });

  it("remove", () => {
    const range: IntegerRange = new IntegerRange("2 - 5");
    expect(range.isValid(4)).toStrictEqual(true);
    range.remove(4);
    expect(range.isValid(4)).toStrictEqual(false);
  });

  it("serialize single", () => {
    const range: NumberRange = new IntegerRange("5");
    expect(range.serialize()).toStrictEqual("5");
    range.add(6);
    expect(range.serialize()).toStrictEqual("5, 6");
  });
  it('serialize upper-range', () => {
    const range: NumberRange = new IntegerRange('1 - 5');
    expect(range.serialize()).toStrictEqual('1 - 5');
  });
});

/*
range.add(8);
range.serialize();
// - 6, 8, 9
range.add(10);
range.serialize();
// - 6, 8 - 10
range.add(7);
range.serialize();
// - 10

// remove()
range.remove(7);
range.serialize();
// - 6, 8 - 10
range.remove(10);
range.serialize();
// - 6, 8, 9
range.remove(8);
range.serialize();
// - 6, 9
range.add(6);
range.serialize();
// - 5, 9

*/
