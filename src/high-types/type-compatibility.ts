export {};

let fooCompatible: any;
let BarCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = BarCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;
// 文字列リテラル型
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;
console.log(fooString);

// 数値リテラル型
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;
console.log(fooNumber);

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'kakikubo'); // 代入できちゃう
