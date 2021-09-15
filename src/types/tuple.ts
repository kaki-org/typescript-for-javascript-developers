export {};

// 順序も持たせたい。tuple型だとunionと違ってこれができる。
let profile: [string, number] = ['Ham', 43]
// profile = [43, 'Ham'];
profile = ['Ham', 44];
console.log(profile);


