function translatePigLatin(str) {
  const arr = str.split('');
  const vowelRegex = /^[aeiou]/i;
  if (arr.every((item) => !vowelRegex.test(item))) {
    return str + 'ay';
  }
  if (vowelRegex.test(arr[0])) {
    return str + 'way';
  }

  while (!vowelRegex.test(arr[0])) {
    arr.push(arr.shift());
  }
  return arr.join('') + 'ay';
}

translatePigLatin('rhythm');
