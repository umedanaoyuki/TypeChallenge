// https://github.com/type-challenges/type-challenges/tree/main/questions/00531-medium-string-to-union

// 文字列をUnion型に変換するStringToUnion<T>を実装してください。

type Test = "123";

type StringToUnion<T extends string> = T extends `${infer K}${infer S}` ? K | StringToUnion<S> : never;

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

