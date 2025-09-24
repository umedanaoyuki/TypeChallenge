// この型を定義してください
type DeepPick<T, U> = {
    [K in keyof U]: K extends keyof  T ? U[K] extends true ? T[K] : DeepPick<T[K], U[K]> : never;
}

type Person = {
    name: string;
    age: number;
    address: {
        country: string;
        houseNumber: number;
    };
};

type Result = DeepPick<
    Person,
    {
        name: true;
        address: {
            country: true;
        };
    }
>;