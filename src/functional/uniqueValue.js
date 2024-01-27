function diffArray(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const difference1 = [...set1].filter((x) => !set2.has(x));
  const difference2 = [...set2].filter((x) => !set1.has(x));

  return [...difference1, ...difference2];
}

diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);
