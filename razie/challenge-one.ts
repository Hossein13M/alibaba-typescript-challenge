type First<T extends any[]> = T extends [] ? never : T[0];

type arr1 = [1, 3, 2, 1];
type arr2 = ["W", "3", "d"];

type numArr = First<arr1>; 
type stArr = First<arr2>;