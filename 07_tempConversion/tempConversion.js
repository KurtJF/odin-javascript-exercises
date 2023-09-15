const convertToCelsius = function (fahrenheit) {
  return Math.round(((fahrenheit - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

// c to f
// c = (f - 32) / 1.8

// f to c
// f = (c * 9) /5 + 32

// 1 decimal place
// Math.round(number * 10) / 10
