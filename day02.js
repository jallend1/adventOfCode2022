// Day 02 of Advent of Code 2022
const fs = require('fs');
const rawElfData = fs.readFileSync('day02-input.txt', 'utf8').split('\n');

const rules = {
  A: {
    // Rock
    X: 3,
    Y: 6,
    Z: 0
  },
  B: {
    // Paper
    X: 0,
    Y: 3,
    Z: 6
  },
  C: {
    // Scissors
    X: 6,
    Y: 0,
    Z: 3
  }
};

const shapePoints = {
  X: 1, // One point for rock
  Y: 2, // Two points for paper
  Z: 3 // Three points for scissors
};

const strategyGuide = {
  X: 0, // X means lose
  Y: 3, // Y means tie
  Z: 6 // Z means win
};

const partOneSolution = () => {
  let score = 0;

  const determineWinner = (elfOne, elfTwo) => {
    // Combine the points for the game outcome with the points associated with the particular shape
    return rules[elfOne][elfTwo] + shapePoints[elfTwo];
  };

  rawElfData.forEach((elfData) => {
    const [elfOne, elfTwo] = elfData.split(' ');
    const winner = determineWinner(elfOne, elfTwo);
    score += winner;
  });
  console.log('Misinterpreted Strategy Guide Solution (Problem #1): ' + score);
};

const partTwoSolution = () => {
  let score = 0;
  rawElfData.forEach((elfData) => {
    const [elfOne, elfTwo] = elfData.split(' ');
    Object.keys(rules[elfOne]).find((shape) => {
      // Finds the shape that will result in the prescribed outcome from the strategy guide
      if (rules[elfOne][shape] === strategyGuide[elfTwo]) {
        // Adds the points for the game outcome with the points associated with the particular shape
        score += rules[elfOne][shape] + shapePoints[shape];
      }
    });
  });
  console.log('Strategy Guide Solution (Problem #2): ' + score);
};

partOneSolution();
partTwoSolution();
