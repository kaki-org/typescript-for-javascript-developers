export {};

let name: any = 'Ham';

// let length = name.length; // numberが返るハズ
// length = 'foo'; // 文字列入っちゃう

let length = (name as string).length;
// length = 'foo';
