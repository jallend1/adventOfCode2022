// Day 03 of Advent of Code 2022
const fs = require('fs');
const rawRucksackData = fs.readFileSync('day03-input.txt', 'utf8').split('\n');

let totalPriority = 0;

const findCommonCharacter = (strOne, strTwo) => {
  const arrOne = strOne.split('');
  const arrTwo = strTwo.split('');
  return arrOne.filter((element) => arrTwo.includes(element)).join('');
};

const calculatePriority = (commonLetter) => {
  if (commonLetter.charCodeAt(0) < 91) {
    return commonLetter.charCodeAt(0) - 38;
  } else {
    return commonLetter.charCodeAt(0) - 96;
  }
};

const sortRucksacks = (rawRucksackData) => {
  rawRucksackData.forEach((rucksackData) => {
    const compartmentOne = rucksackData.slice(
      0,
      Math.floor(rucksackData.length / 2)
    );
    const compartmentTwo = rucksackData.slice(
      Math.floor(rucksackData.length / 2)
    );
    const commonLetter = findCommonCharacter(compartmentOne, compartmentTwo);
    totalPriority += calculatePriority(commonLetter);
  });
};

sortRucksacks(rawRucksackData);

console.log(totalPriority);
