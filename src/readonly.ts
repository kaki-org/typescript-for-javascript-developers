export {};

class VisaCard {
  constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン'; // Cannot assign to 'owner' because it is a read-only property.