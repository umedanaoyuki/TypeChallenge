// https://github.com/type-challenges/type-challenges/tree/main/questions/00189-easy-awaited

type ExampleType = Promise<string>;
type MyAwaited<T> = T extends Promise<infer R> ? R : never;

type Result = MyAwaited<ExampleType>;
// string
