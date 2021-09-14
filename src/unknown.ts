export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

// any型はなんでもいけちゃうので便利だが
let sumAny = numberAny + 10;
console.log(sumAny);

// type guardしてきちんとすすめるなら unknown型
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

