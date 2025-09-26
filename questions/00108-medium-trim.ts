// https://github.com/type-challenges/type-challenges/tree/main/questions/00108-medium-trim

// 文字列から両端の空白を削除した新しい文字列を返すTrim<T>を実装してください。

type Trim<T extends string> = T extends `${" "}${infer R}` | `${infer R}${" "}` ? Trim<R> : T;

type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'
