const bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};
export default bmi;

// console.log(bmi(1.78, 86));
