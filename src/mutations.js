/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. */

function mutation(arr) {
  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();

  for(let i = 0; i < secondWord.length; i++) {
    if(firstWord.indexOf(secondWord[i]) < 0) {
      return false;
    }
    
  } return true;
}

mutation(["hello", "hey"]);