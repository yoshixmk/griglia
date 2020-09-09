import sinon, { SinonSpy } from 'sinon';
import { AwesomeCollection, Cancel } from '../AwesomeCollection';

describe('AwesomeCollection', () => {
  it('tests', () => {
    expect.assertions(1);

    const collection: AwesomeCollection<string | Error> = new AwesomeCollection<string | Error>(
      'alpha',
      'bravo',
      'charlie',
      new Error(),
      'echo',
      'foxtrot',
      'golf'
    );

    const spy: SinonSpy = sinon.spy();

    collection.forEach((v: string | Error, cancel: Cancel) => {
      if (v instanceof Error) {
        cancel();

        return;
      }

      spy();
    });

    expect(spy.callCount).toBe(3);
  });
});
