// Day 01 of Advent of Code 2022

const fs = require('fs');
const rawElfData = fs.readFileSync('day01-input.txt', 'utf8').split('\n');
const sortedElves = [[]];
let elfNumber = 0;

function separateElves(data) {
  data.map((elfFood) => {
    if (elfFood === '') {
      elfNumber++;
      sortedElves.push([]);
    } else {
      sortedElves[elfNumber].push(elfFood);
    }
  });
}

function calculateLargestSumInArray(arr) {
  let largestSum = 0;
  arr.map((num) => {
    const sum = num.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);
    if (sum > largestSum) {
      largestSum = sum;
    }
  });
  return largestSum;
}

separateElves(rawElfData);
console.log(calculateLargestSumInArray(sortedElves));
