// Day 06 of Advent of Code 2022

const fs = require('fs');
const code = fs.readFileSync('day06-input.txt', 'utf8');

const findDistinctCharacters = (num, string) => {
  for (let startIndex = 0; startIndex < string.length - num; startIndex++) {
    const uniqueCharacters = new Set();
    for (let char = startIndex; char < startIndex + num; char++) {
      uniqueCharacters.add(string[char]);
    }
    if (uniqueCharacters.size === num) {
      console.log(startIndex + num);
      return;
    }
  }
};

findDistinctCharacters(4, code);
findDistinctCharacters(14, code);
