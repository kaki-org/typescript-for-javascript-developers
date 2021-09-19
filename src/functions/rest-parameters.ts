export {};

const reducer = (previousValue: number, currentValue: number) => {
  console.log({ previousValue, currentValue});
  return previousValue + currentValue;
};
const sum: (...values: number[]) => number  = (...values: number[]): number => {
  return values.reduce(reducer);
};
// [1, 2, 3, 4].reduce(reducer);
sum(1, 2, 3, 4, 5);

