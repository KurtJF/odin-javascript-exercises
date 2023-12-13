const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num === 0) return 0;

  let numOne = 1;
  let numTwo = 0;

  for (let i = 2; i <= num; i++) {
    let currentNum = numOne + numTwo;
    numTwo = numOne;
    numOne = currentNum;
  }

  return numOne;
};

// Do not edit below this line
module.exports = fibonacci;
