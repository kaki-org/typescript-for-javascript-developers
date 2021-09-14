export {};

// 交差型(intersection)
type Pitcher1 = {
  throwingSpeed: number;
}

type Batter1 = {
  battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

// これはだるい
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
// console.log(typeof TwoWayPlayer);
console.log(OtaniShouhei);