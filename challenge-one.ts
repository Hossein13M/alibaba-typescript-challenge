type First<T extends Array<any>> = T[0]

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type test = First<arr2>

let a : test = 3
