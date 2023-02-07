// Day 07 of Advent of Code 2022

const fs = require('fs');
const commandLines = fs.readFileSync('day07-input.txt', 'utf8').split('\n');

console.log(commandLines);

let currentPath = [];
let totals = [];

const handleCommands = (command) => {
  if (command[1] === 'cd') {
    if (command[2] === '..') {
      currentPath.pop();
    } else {
      const index = totals.findIndex(
        (dir) => dir.id === JSON.stringify(currentPath + command[2])
      );
      if (index === -1) {
        totals.push({
          name: command[2],
          size: 0,
          id: JSON.stringify(currentPath + command[2])
        });
      }
      currentPath.push({
        name: command[2],
        size: 0,
        id: JSON.stringify(currentPath + command[2])
      });
    }
  }
};

const handleFiles = (command) => {
  const fileSize = parseInt(command[0]);
  //   console.log(currentPath);
  const index = totals.findIndex(
    (total) => total.id === JSON.stringify(currentPath + command[2])
  );
  console.log(index);
  if (index !== -1) totals[index].size += fileSize;
  console.log(totals);
  // console.log(command);
  // console.log(currentPath.length);
  // console.log(fileSize);
  // console.log(currentPath);
};

commandLines.forEach((commandLine) => {
  const command = commandLine.split(' ');
  if (command[0] === '$') handleCommands(command);
  else if (command[0] !== 'dir') handleFiles(command);
});

console.log(totals);
