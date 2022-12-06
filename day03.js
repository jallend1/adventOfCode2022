// Day 03 of Advent of Code 2022
const fs = require('fs');
const rawRucksackData = fs.readFileSync('day03-input.txt', 'utf8').split('\n');

let totalPriority = 0;
let badgePriority = 0;

const findCommonCharacter = (strOne, strTwo, strThree = null) => {
  const arrOne = strOne.split('');
  const arrTwo = strTwo.split('');
  return !strThree
    ? arrOne.filter((element) => arrTwo.includes(element)).join('')
    : arrOne
        .filter((element) => arrTwo.includes(element))
        .filter((element) => strThree.includes(element))
        .join('');
};

const calculatePriority = (commonLetter) => {
  if (commonLetter.charCodeAt(0) < 91) {
    return commonLetter.charCodeAt(0) - 38;
  } else {
    return commonLetter.charCodeAt(0) - 96;
  }
};

const problemOne = (rawRucksackData) => {
  rawRucksackData.forEach((rucksackData) => {
    // Divides the rucksack into its two components
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
  console.log(totalPriority);
};

const problemTwo = (rawRucksackData) => {
  const elfGroupSize = 3;
  const elvesGrouped = rawRucksackData.reduce((elfGroup, elf, index) => {
    const groupIndex = Math.floor(index / elfGroupSize);
    if (!elfGroup[groupIndex]) {
      elfGroup[groupIndex] = [];
    }
    elfGroup[groupIndex].push(elf);
    return elfGroup;
  }, []);
  elvesGrouped.forEach((elfGroup) => {
    const [elfOne, elfTwo, elfThree] = elfGroup;
    const commonLetter = findCommonCharacter(elfOne, elfTwo, elfThree);
    badgePriority += calculatePriority(commonLetter);
  });
  console.log(badgePriority);
};

problemOne(rawRucksackData);
problemTwo(rawRucksackData);
