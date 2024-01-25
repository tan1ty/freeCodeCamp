// Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
  const newArr = title
    .split(' ')
    .map((word) => word.slice(0, 1).toLowerCase() + word.slice(1))
    .filter((word) => word.trim() !== '')
    .join('-');
  return newArr;
}
urlSlug(' Winter Is  Coming');
