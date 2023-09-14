const removeFromArray = function (nums, ...args) {
  // filter to iterate over array
  return nums.filter((num) => !args.includes(num));
  // for each num, check if it's not (!) included in args using the !args.includes(num)
  // if condition is true, element is included in the result
  // otherwise, it's filtered out.
};

// Do not edit below this line
module.exports = removeFromArray;
