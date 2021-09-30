export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profile>; // partial型をつかえばオプショナルに
type RequiredType = Required<Profile>; //required型を使うと必須に
