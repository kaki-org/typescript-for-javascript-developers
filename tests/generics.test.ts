import { expectType } from 'tsd';
import echo from '../src/high-types/generics';

describe('echo', (): void => {
  test('numberを指定したときはnumberが返る', (): void => {
    const result: number = echo<number>(123);
    expect(result).toEqual(123);
    expectType<number>(result);
  });
  test('stringを指定したときはstringが返る', (): void => {
    const result: string = echo<string>('Hello');
    expect(result).toEqual('Hello');
    expectType<string>(result);
  });
  // test.skip('stringを指定したときはエラーが返る', (): void => {
  //   expect(() => {
  //     echo<number>('Hello');
  //   }).toThrow();
  // });
});
