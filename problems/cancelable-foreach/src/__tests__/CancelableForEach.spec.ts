import sinon, { SinonSpy } from 'sinon';
import { AwesomeCollection } from '../AwesomeCollection';
import { Cancel, CancelableForEach } from '../CancelableForEach';

describe('CancelableForEach', () => {
  it('tests', () => {
    const collection: CancelableForEach<unknown> = new AwesomeCollection(
      'alpha',
      'bravo',
      'charlie',
      new Error(),
      'echo',
      'foxtrot',
      'golf'
    );

    const spy: SinonSpy = sinon.spy();

    collection.forEach((v: unknown, cancel: Cancel) => {
      if (v instanceof Error) {
        cancel();

        return;
      }

      spy();
    });

    expect(spy.callCount).toBe(3);
  });
});
