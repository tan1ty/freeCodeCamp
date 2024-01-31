/*
 Make a function that looks through an array of objects (first argument) and returns an array
 of all objects that have matching name and value pairs (second argument).
 Each name and value pair of the source object has to be present in the object from the collection
 if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {
  const findObj = (obj) => {
    const prop = Object.keys(source);
    for (let i = 0; i < prop.length; i++) {
      if (obj.hasOwnProperty(prop[i]) && obj[prop[i]] === source[prop[i]]) {
        return true;
      }
      return false;
    }
  };

  return collection.filter(findObj);
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
