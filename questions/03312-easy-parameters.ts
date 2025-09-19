// https://github.com/type-challenges/type-challenges/tree/main/questions/03312-easy-parameters

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<
    T extends (...args: any) => void
> = T extends (...args: infer R) => any
    ? R
    : never;

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
