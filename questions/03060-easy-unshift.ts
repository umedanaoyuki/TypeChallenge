// https://github.com/type-challenges/type-challenges/tree/main/questions/03060-easy-unshift

type Unshift<T extends number[], U extends number> = [U, ...T]

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]