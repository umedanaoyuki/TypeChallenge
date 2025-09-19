// https://github.com/type-challenges/type-challenges/tree/main/questions/00223-hard-isany

// IsAnyを実装してください
type IsAny<T> = 0 extends 1 & T ? true : false;

type A = IsAny<string>; // false
type B = IsAny<any>; // true