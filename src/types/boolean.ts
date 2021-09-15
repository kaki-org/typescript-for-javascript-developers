export {};

// exportしておかないと再宣言になってしまい、コンパイルできない
let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });