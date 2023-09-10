"use strict";
// Implement a generic called First<T> that takes an Array T and returns its first element's type.
// type First<T>
const arr1 = [1, 3, 2, 1];
const arr2 = ["W", "3", "d"];
function whatIsTheType(value) {
    console.log(typeof value);
}
whatIsTheType(arr1[0]);
whatIsTheType(arr2[0]);
