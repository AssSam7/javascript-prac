const largestSmallestUnSortedArray = (arr) => {
  return { max: Math.max(...arr), min: Math.min(...arr) };
};

console.log(largestSmallestUnSortedArray([1, 5, 4, 2]));
