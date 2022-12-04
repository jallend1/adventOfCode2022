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
  console.log(largestSum);
}

function sortArraysBySum(arr) {
  arr.sort((a, b) => {
    const sumA = a.reduce((acc, curr) => acc + parseInt(curr), 0);
    const sumB = b.reduce((acc, curr) => acc + parseInt(curr), 0);
    return sumB - sumA;
  });
}

function findSumOfTopThree(arr) {
  const richestElves = arr.slice(0, 3);
  const sum = richestElves.reduce((acc, curr) => {
    return acc + curr.reduce((acc, curr) => acc + parseInt(curr), 0);
  }, 0);
  console.log(sum);
}

separateElves(rawElfData);
calculateLargestSumInArray(sortedElves);
sortArraysBySum(sortedElves);
findSumOfTopThree(sortedElves);
