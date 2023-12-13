const findTheOldest = function (arr) {
  return arr.reduce(old, (current) => {
    const oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return oldAge < currentAge ? current : old;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
