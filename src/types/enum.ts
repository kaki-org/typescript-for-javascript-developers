export {};

// 列挙型
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);
console.log(Months[0]);
console.log(Months[1]);
console.log(Months[Months.January]);
console.log(Months[Months.February]);

// // JavaScriptでやろうとするとこうなる
// const MonthJs = {
//   January: 0,
//   February: 1,
//   March: 2,
// }

// console.log(MonthJs.January);
// console.log(MonthJs.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}
let green = COLORS.GREEN;
console.log(green);

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}
let yellow = COLORS.YELLOW;
console.log(yellow);
