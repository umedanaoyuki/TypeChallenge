// https://github.com/type-challenges/type-challenges/tree/main/questions/00116-medium-replace

// Replace型を実装してください。
// Replace型は、文字列型Sのうち、文字列型Tにマッチする部分を文字列型Uに置換した型を返します。

type Replace<T extends string, From extends string, To extends string> = T extends `${infer R}${From}${infer L}` ? `${R}${To}${L}` : never;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
