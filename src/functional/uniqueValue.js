import * as R from 'ramda';

/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.*/

const arr1 = ['diorite', 'andesite', 'grass', 'pink wool', 'dead shrub'];
const arr2 = ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub'];

//solution with Set for big data

function diffArray(arr1, arr2) {
  const setOne = new Set(arr1);
  const setTwo = new Set(arr2);

  const diffOne = [...setOne].filter((x) => !setTwo.has(x));
  const diffTwo = [...setTwo].filter((x) => !setOne.has(x));

  return [...diffOne, ...diffTwo];
}

diffArray(arr1, arr2);

//simple solution

function diffArr(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  return newArr.filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArr(arr1, arr2);

//with Ramda library

const diff = R.difference(arr1, arr2);
