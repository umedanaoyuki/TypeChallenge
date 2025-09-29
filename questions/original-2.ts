type Test = {
    firstName: string;
    lastName: string;
    readonly age: number;
};

type IfNotEquals<X, Y, A = true, B = false> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? B
  : A;

type IsPropertyReadonly<T, K extends keyof T> = IfNotEquals<
  { [P in K]: T[P] },
  { -readonly [P in K]: T[P] }
>;

type Result = IsPropertyReadonly<Test, "firstName">; // expected to be `false`
type Result2 = IsPropertyReadonly<Test, "lastName">; // expected to be `false`
type Result3 = IsPropertyReadonly<Test, "age">; // expected to be `true`
