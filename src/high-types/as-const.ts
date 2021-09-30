export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const; // Ham型という文字列リテラルになる(要するに定数)
// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 178
} as const; // 型を定数化できる(readonlyになる)
// profile.name = 'Ham';
// profile.height = 180;
