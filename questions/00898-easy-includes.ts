// https://github.com/type-challenges/type-challenges/tree/main/questions/00898-easy-includes

// Includesを実装してください
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
type isPillarMen2 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">; // expected to be `true`
