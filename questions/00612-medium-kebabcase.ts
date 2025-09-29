// https://github.com/type-challenges/type-challenges/tree/main/questions/00612-medium-kebabcase

type KebabCase<S extends string> = S extends `${infer R}${infer L}`?
    L extends Uncapitalize<L> ? `${Uncapitalize<R>}${KebabCase<L>}` : `${Uncapitalize<R>}-${KebabCase<L>}` : S;

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";
