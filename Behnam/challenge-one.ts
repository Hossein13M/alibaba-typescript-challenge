// Implement a generic called First<T> that takes an Array T and returns its first element's type.

type First<T extends any[]> = T[0];

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>;