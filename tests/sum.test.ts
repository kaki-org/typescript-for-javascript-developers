import sum from '../src/sum';

describe('sum', (): void => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2));
  });
});
