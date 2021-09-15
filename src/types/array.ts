export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers2: Array<number> = [4, 5, 6];
console.log(numbers2);

let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];


let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];
console.log(strings);

let array2: number[][] = [
  [50, 100],
  [150, 300]
];

console.log(array2);

// 共用型(Union Types)
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
console.log(hairetsu);