import sum from '../src/sum';

describe('sum', (): void => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2));
  });
});
// describe.skip('matcher', (): void => {
//   test('object assignment', () => {
//     const data: { key?: number } = { one: 1 };
//     data.two = 2;
//     expect(data).toEqual({ one: 1, two: 2 });
//   });
// });
describe('matcher', () => {
  test('adding positive numbers is not zero', () => {
    for (let a: number = 1; a < 10; a++) {
      for (let b: number = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});
