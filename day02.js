// Day 02 of Advent of Code 2022
const fs = require('fs');
const rawElfData = fs.readFileSync('day02-input.txt', 'utf8').split('\n');

const determineWinner = (elfOne, elfTwo) => {
  if (elfOne === 'A') {
    if (elfTwo === 'X') return 3 + 1;
    if (elfTwo === 'Y') return 6 + 2;
    if (elfTwo === 'Z') return 0 + 3;
  } else if (elfOne === 'B') {
    if (elfTwo === 'X') return 0 + 1;
    if (elfTwo === 'Y') return 3 + 2;
    if (elfTwo === 'Z') return 6 + 3;
  } else if (elfOne === 'C') {
    if (elfTwo === 'X') return 6 + 1;
    if (elfTwo === 'Y') return 0 + 2;
    if (elfTwo === 'Z') return 3 + 3;
  }
};

// const calculateScore = (elf) => {
//   if (elf === 'A' || elf === 'X') return 1;
//   if (elf === 'B' || elf === 'Y') return 2;
//   if (elf === 'C' || elf === 'Z') return 3;
// };
let sum = 0;
rawElfData.forEach((elfData) => {
  const [elfOne, elfTwo] = elfData.split(' ');
  const winner = determineWinner(elfOne, elfTwo);
  sum += winner;
  console.log(winner);
});

console.log(sum);
