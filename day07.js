// Day 07 of Advent of Code 2022

const fs = require('fs');
const commandLines = fs.readFileSync('day07-input.txt', 'utf8').split('\n');

console.log(commandLines);

let currentPath = [];
let totals = [];

const handleCommands = (command) => {
  console.log(command);
  if (command[1] === 'cd') {
    if (command[2] === '..') {
      currentPath.pop();
    } else {
      currentPath.push(command[2]);
    }
  }
};

const handleFiles = (command) => {
  const fileSize = parseInt(command[0]);
  //   console.log(currentPath);
  console.log(currentPath.length);
};

commandLines.forEach((commandLine) => {
  const command = commandLine.split(' ');
  if (command[0] === '$') handleCommands(command);
  else if (command[0] !== 'dir') handleFiles(command);
});
