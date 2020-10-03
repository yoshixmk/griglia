import { NumberRange } from '../NumberRange';
import { RangeFactory } from '../RangeFactory';

describe('ComplexRange', () => {
  it('tests', () => {
    const factory: RangeFactory = RangeFactory.of(0, 20, 2);

    const range: NumberRange = factory.forge('4 -');

    console.log(range.serialize());

    range.add(2);
    console.log(range.serialize());

    range.add(3);
    console.log(range.serialize());

    range.remove(2);
    console.log(range.serialize());

    range.remove(1);
    console.log(range.serialize());

    range.add(2);
    console.log(range.serialize());

    range.add(3);
    console.log(range.serialize());

    range.add(4);
    console.log(range.serialize());

    range.add(1);
    console.log(range.serialize());

    range.add(0);
    console.log(range.serialize());
  });
});
