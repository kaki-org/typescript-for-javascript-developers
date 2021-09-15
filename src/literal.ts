export {};

// union型とliteral型で曜日を管理する
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '31'; // 曜日をいれたい

let month: 1| 2| 3 | 4 | 5 | 6 | 7| 8 | 9 | 10 |  11 | 12= 1;
month = 12;
// month = 13;

// あまり意味ないけどできる
let TRUE: true = true;
// TRUE = false;


console.log(dayOfTheWeek);
console.log(month);
console.log(TRUE);

