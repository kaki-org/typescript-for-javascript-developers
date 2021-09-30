import bmi from '../src/functions/bmi';

describe('bmi', (): void => {
  test('should return correct bmi', (): void => {
    const result: number = bmi(1.65, 58);
    expect(result).toBeCloseTo(21.3); // 21.30394857667585
  });
});
