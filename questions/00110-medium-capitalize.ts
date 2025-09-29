// https://github.com/type-challenges/type-challenges/tree/main/questions/00110-medium-capitalize

type MyCapitalize<S extends string> = S extends `${infer R}${infer L}` ? `${Uppercase<R>}${L}` : S;

type capitalized = MyCapitalize<"hello world">