
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
// as constの配列を表す型
type TupleToObject<T extends readonly any[]> = {
    // T[number]で配列の各要素にアクセスできる
    [K in T[number]]: K
}

type result = TupleToObject<typeof tuple>;
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
