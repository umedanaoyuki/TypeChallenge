// https://github.com/type-challenges/type-challenges/tree/main/questions/00459-medium-flatten

// Flattenを実装してください。
type Flatten<T extends any[], S extends any[] = []> =
    T extends [infer R, ...infer U] ? R extends any[] ? Flatten<[...R, ...U], S> :　Flatten<[...U], [...S, R]> : S;

type flatten = Flatten<[1, 2, [3, 4], [[5]]]>; // [1, 2, 3, 4, 5]

