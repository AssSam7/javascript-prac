// Find the duplicate elements of an array, return false if not found
const dupNumArrayIntegers = (arr) => {
  let doubleDups = [];
  // To handle cases of 'undefined' arr i.e. no parameter passed to input
  if (arr) {
    // Identify the duplicate elements
    const dups = arr.filter((num, index) => arr.indexOf(num) !== index);
    // Eliminate duplicates from the 'dups' identified
    dups.forEach((dup) => {
      if (!doubleDups.includes(dup)) {
        doubleDups.push(dup);
      }
    });
  }
  // Return in all cases irrespective of the input
  return doubleDups && doubleDups.length > 0 ? doubleDups : false;
};

console.log(dupNumArrayIntegers([1, 2]));
