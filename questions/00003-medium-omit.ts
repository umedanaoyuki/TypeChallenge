// https://github.com/type-challenges/type-challenges/tree/main/questions/00003-medium-omit

// MyOmit型を定義してください
// MyOmitは、第二引数で指定したキーを除外した型を返す型です

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type MyOmit<T, U> = {
    [P in Exclude<keyof T, U>]: T[P];
}
type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
    completed: false,
};
