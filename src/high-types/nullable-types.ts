export {};

let profile: { name: string; age: number | null } = {
  name: 'Ham',
  age: null
};

profile = { name: 'test', age: 23 };
console.log(profile);
profile = { name: 'test', age: null };
console.log(profile);
