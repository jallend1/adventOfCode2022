// Day 02 of Advent of Code 2022
const fs = require('fs');
const rawElfData = fs.readFileSync('day02-input.txt', 'utf8').split('\n');

const rockPaperScissorsRules = {
  A: {
    X: 3,
    Y: 6,
    Z: 0
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3
  }
};

const shapePoints = {
  X: 1,
  Y: 2,
  Z: 3
};

let score = 0;

const determineWinner = (elfOne, elfTwo) => {
  return rockPaperScissorsRules[elfOne][elfTwo] + shapePoints[elfTwo];
};

rawElfData.forEach((elfData) => {
  const [elfOne, elfTwo] = elfData.split(' ');
  const winner = determineWinner(elfOne, elfTwo);
  score += winner;
});

console.log(score);
