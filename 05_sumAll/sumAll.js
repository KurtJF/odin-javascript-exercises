const sumAll = function (a, b) {
  // checks if (a, b) is a 'number' and is not negative
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0)
    return "ERROR";

  // Math.min return smallest number between (a, b)
  // Math.max return largest number between (a, b)
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;

  // iterate over each number from a to b
  for (let i = min; i <= max; i++) {
    // sums each iterated number
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
