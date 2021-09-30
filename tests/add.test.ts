import add from '../src/class-types/add';

describe('add', (): void => {
  test('should return 3', (): void => {
    const result: number = add(1, 2);
    expect(result).toEqual(3);
  });
});
