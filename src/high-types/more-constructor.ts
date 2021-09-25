export {};

class Person {
  // 以下の通りアクセス修飾子をコンストラクタの引数に定義してあげると、省略表記を使うことができる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me);
