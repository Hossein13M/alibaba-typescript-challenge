// Implement a generic called First<T> that takes an Array T and returns its first element's type.

type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

const array1 = [1, 2, 3];
type Result1 = First<typeof array1>;

const array2 = ['a', 'b', 'c'];
type Result2 = First<typeof array2>;
