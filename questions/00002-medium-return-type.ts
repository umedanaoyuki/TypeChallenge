// https://github.com/type-challenges/type-challenges/tree/main/questions/00002-medium-return-type

// MyReturnTypeを実装してください。
// MyReturnTypeは、関数の戻り値の型を返す型です。

// 返り値の型を推論させる
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
};



type a = MyReturnType<typeof fn>; // should be "1 | 2"