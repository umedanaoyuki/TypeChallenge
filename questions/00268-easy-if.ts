// https://github.com/type-challenges/type-challenges/tree/main/questions/00268-easy-if

type If<T extends boolean, U extends string, P extends string> = T extends true ? U : P;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'

