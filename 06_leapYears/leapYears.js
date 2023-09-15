const leapYears = function (year) {
  return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
  // divisible by 4 (divisible by 400 or not (!==) divisible by 100)
};

// Do not edit below this line
module.exports = leapYears;
