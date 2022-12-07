// Day 05 of Advent of Code 2022

const fs = require('fs');
const inputFile = fs.readFileSync('day05-input.txt', 'utf8').split('\n');
const rawStackData = inputFile.slice(0, 8);

const stackData = [...Array(9)].map(() => []);

// The crate layout to help me visualize:
// '    [H]         [D]     [P]        ',
// '[W] [B]         [C] [Z] [D]        ',
// '[T] [J]     [T] [J] [D] [J]        ',
// '[H] [Z]     [H] [H] [W] [S]     [M]',
// '[P] [F] [R] [P] [Z] [F] [W]     [F]',
// '[J] [V] [T] [N] [F] [G] [Z] [S] [S]',
// '[C] [R] [P] [S] [V] [M] [V] [D] [Z]',
// '[F] [G] [H] [Z] [N] [P] [M] [N] [D]',
// ' 1   2   3   4   5   6   7   8   9 ',

const extractCrates = (line) => {
  const crates = [];
  for (let i = 1; i <= 33; i += 4) {
    crates.push(line[i]);
  }
  return crates;
};

rawStackData.forEach((line) => {
  const crateContents = extractCrates(line);
  crateContents.map((crate, index) => {
    if (crate !== ' ') {
      stackData[index].push(crate);
    }
  });
});

console.log(stackData);
