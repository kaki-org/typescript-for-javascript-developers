export {};

type Mojiretsu = string;


const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

console.log(fooString);
console.log(fooMojiretsu);
 
type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;

const example1 = {
  name: 'Ham',
  age: 43
};

const example2: Profile = {
  name: 'Ham',
  age: 43
};


console.log(example1);
console.log(example2);
