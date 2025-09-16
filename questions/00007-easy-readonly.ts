interface Todo {
  title: string;
  description: string;
}

// Tは Todo型
type MyReadonly<T> = {
  // keyof T → title | description
  // T[K] → Todo[title]　→ "Hey" など
  readonly [K in keyof T]: T[K]
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

/**
 * エラー列（有効にした時にエラーになれば正解）
 */
// todo.title = "Hello";
// Error: cannot reassign a readonly property
// todo.description = "barFoo";
// Error: cannot reassign a readonly property
