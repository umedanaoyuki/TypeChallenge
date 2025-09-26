// https://github.com/type-challenges/type-challenges/tree/main/questions/00599-medium-merge

// Merge型を実装してください。
// Merge型は、2つのオブジェクト型を受け取り、それらをマージした型を返す型です。

type foo = {
    name: string;
    age: string;
};
type coo = {
    age: number;
    sex: string;
};

type Merge<T, K> = {
    [P in keyof T | keyof K]: P extends keyof T ? T[P] : P extends keyof K ? K[P] : never
}

type Result = Merge<foo, coo>;
// expected to be {name: string, age: number, sex: string}
