
type Push<T extends any[], U extends string> = [...T, U]

type Result = Push<[1, 2], "3">;
// [1, 2, '3']