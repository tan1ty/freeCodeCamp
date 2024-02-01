/*
 Make a function that looks through an array of objects (first argument) and returns an array
 of all objects that have matching name and value pairs (second argument).
 Each name and value pair of the source object has to be present in the object from the collection
 if it is to be included in the returned array.*/

function whatIsInAName(collection, source) {
  const props = Object.keys(source);
  return collection.filter((obj) =>
    props.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
