/*We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.*/

function sumAll(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const min = sortedArr[0];
  const max = sortedArr[1];
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

// solution with Arithmetic series sum formula

function sumAllFormula(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return ((max - min + 1) * (min + max)) / 2;
}

sumAllFormula([1, 4]);
