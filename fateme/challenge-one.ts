// Implement a generic called First<T> that takes an Array T and returns its first element's type.

type First<T extends any[]> = T extends [infer FirstElement, ...any[]] ? FirstElement : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>;
type head2 = First<arr2>;

let head1: head1 = 'a'
let head2: head2 = 3