// https://github.com/type-challenges/type-challenges/tree/main/questions/00009-medium-deep-readonly

// この型を実装してください
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends true ? T[P] : DeepReadonly<T[P]>;
}

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`