import { alternate } from '../Alternation';

describe('Alternation', () => {
  it('tests', () => {
    const arr01: Array<number> = [1, 3, 5];
    const length01: number = arr01.length;

    expect(alternate<number>(arr01)).toStrictEqual([1, 3, 5]);
    expect(arr01).toHaveLength(length01);

    const arr02: Array<number> = [1, 3, 5];
    const arr03: Array<number> = [2, 4, 6];
    const length02: number = arr02.length;
    const length03: number = arr03.length;

    expect(alternate<number>(arr02, arr03)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(arr02).toHaveLength(length02);
    expect(arr03).toHaveLength(length03);

    const arr04: Array<number> = [1, 3, 5];
    const arr05: Array<number> = [2, 4];
    const length04: number = arr04.length;
    const length05: number = arr05.length;

    expect(alternate<number>(arr04, arr05)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(arr04).toHaveLength(length04);
    expect(arr05).toHaveLength(length05);

    const arr06: Array<number> = [1, 3, 5];
    const arr07: Array<number> = [0];
    const length06: number = arr06.length;
    const length07: number = arr07.length;

    expect(alternate<number>(arr06, arr07)).toStrictEqual([1, 0, 3, 5]);
    expect(arr06).toHaveLength(length06);
    expect(arr07).toHaveLength(length07);

    const arr08: Array<number> = [1, 3, 5];
    const arr09: Array<number> = [0];
    const length08: number = arr08.length;
    const length09: number = arr09.length;

    expect(alternate<number>(arr08, arr09)).toStrictEqual([1, 3, 5]);
    expect(arr08).toHaveLength(length08);
    expect(arr09).toHaveLength(length09);

    const arr10: Array<number> = [3];
    const arr11: Array<number> = [2, 4, 6];
    const length10: number = arr10.length;
    const length11: number = arr11.length;

    expect(alternate<number>(arr10, arr11)).toStrictEqual([3, 2, 4, 6]);
    expect(arr10).toHaveLength(length10);
    expect(arr11).toHaveLength(length11);

    const arr12: Array<number> = [];
    const arr13: Array<number> = [2, 4, 6];
    const length12: number = arr12.length;
    const length13: number = arr13.length;

    expect(alternate<number>(arr12, arr13)).toStrictEqual([2, 4, 6]);
    expect(arr12).toHaveLength(length12);
    expect(arr13).toHaveLength(length13);

    const arr14: Array<number> = [1, 2, 3];
    const arr15: Array<number> = [4, 5, 6];
    const arr16: Array<number> = [7, 8, 9];
    const length14: number = arr14.length;
    const length15: number = arr15.length;
    const length16: number = arr16.length;

    expect(alternate<number>(arr14, arr15, arr16)).toStrictEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
    expect(arr14).toHaveLength(length14);
    expect(arr15).toHaveLength(length15);
    expect(arr16).toHaveLength(length16);

    const arr17: Array<number> = [1];
    const arr18: Array<number> = [4, 5, 6];
    const arr19: Array<number> = [];
    const arr20: Array<number> = [8, 9];
    const length17: number = arr17.length;
    const length18: number = arr18.length;
    const length19: number = arr19.length;
    const length20: number = arr20.length;

    expect(alternate<number>(arr17, arr18, arr19, arr20)).toStrictEqual([1, 4, 8, 5, 9, 6]);
    expect(arr17).toHaveLength(length17);
    expect(arr18).toHaveLength(length18);
    expect(arr19).toHaveLength(length19);
    expect(arr20).toHaveLength(length20);

    const arr21: Array<undefined> = [undefined, undefined, undefined];
    const arr22: Array<undefined> = [undefined, undefined, undefined, undefined];
    const arr23: Array<undefined> = [undefined, undefined];
    const length21: number = arr21.length;
    const length22: number = arr22.length;
    const length23: number = arr23.length;

    expect(alternate<undefined>(arr21, arr22, arr23)).toStrictEqual([undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
    expect(arr21).toHaveLength(length21);
    expect(arr22).toHaveLength(length22);
    expect(arr23).toHaveLength(length23);
  });
});
