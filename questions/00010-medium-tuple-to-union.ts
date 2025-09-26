// https://github.com/type-challenges/type-challenges/tree/main/questions/00010-medium-tuple-to-union

// TupleToUnionを実装してください

type Arr = ["1", "2", "3"];

type TupleToUnion<T extends any[]> = T[number]

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
