// https://github.com/type-challenges/type-challenges/tree/main/questions/00533-easy-concat

type Concat<T extends any[], U extends any[]> = [...T, ...U]
type Result = Concat<[1], [2]>;