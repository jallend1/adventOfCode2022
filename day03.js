// Day 03 of Advent of Code 2022
const fs = require('fs');
const rawRucksackData = fs.readFileSync('day03-input.txt', 'utf8').split('\n');

rawRucksackData.forEach((rucksackData) => {
  const compartmentOne = rucksackData.slice(
    0,
    Math.floor(rucksackData.length / 2)
  );
  const compartmentTwo = rucksackData.slice(
    Math.floor(rucksackData.length / 2)
  );
  console.log(compartmentOne);
  console.log(compartmentTwo);
});
