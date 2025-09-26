// https://github.com/type-challenges/type-challenges/tree/main/questions/00645-medium-diff

type Diff<T, K> = Omit<T & K, keyof (T | K)>

type Foo = {
    name: string;
    age: string;
};
type Bar = {
    name: string;
    age: string;
    gender: number;
};
type Coo = {
    name: string;
    gender: number;
};

type DiffFooBar = Diff<Foo, Bar>; // { gender: number }
type DiffBarFoo = Diff<Bar, Foo>; // { gender: number }
type DiffFooCoo = Diff<Foo, Coo>; // { gender: number, age: string }
type DiffCooFoo = Diff<Coo, Foo>; // { gender: number, age: string }
