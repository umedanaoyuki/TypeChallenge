// https://github.com/type-challenges/type-challenges/tree/main/questions/00020-medium-promise-all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// アロー関数の場合は実装が必要になる
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [P in keyof T]: Awaited<T[P]>
}>;


// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);
