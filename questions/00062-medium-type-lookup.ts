// https://github.com/type-challenges/type-challenges/tree/main/questions/00062-medium-type-lookup

interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
}

type LookUp<U, T> = U extends {
    type: T
} ? U : never;

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`