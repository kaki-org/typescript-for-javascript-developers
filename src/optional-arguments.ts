export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number, 
    weight: number,
    printable?: boolean
    ) => {
      const bmiValue: number = weight / (height * height);
      if (printable) console.log(bmiValue);
      return bmiValue;
    }


// bmi(身長, 体重, console.logで出力するかどうか)
bmi(1.78, 86, true);
// bmi(1.78, 86, false);
// bmi(1.78, 86); // falseと同じ