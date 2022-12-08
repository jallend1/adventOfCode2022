// Day 06 of Advent of Code 2022

const fs = require('fs');
const code = fs.readFileSync('day06-input.txt', 'utf8');

let index;

const findMarker = (code) => {
  for (let markerStart = 0; markerStart < code.length - 4; markerStart++) {
    const uniqueCharacters = new Set();
    for (let char = markerStart; char < markerStart + 4; char++) {
      uniqueCharacters.add(code[char]);
    }
    if (uniqueCharacters.size === 4) {
      index = markerStart + 4;
      return uniqueCharacters;
    }
  }
};

console.log(findMarker(code));
console.log(index);
