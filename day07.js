// Day 07 of Advent of Code 2022

const fs = require('fs');
const commandLines = fs.readFileSync('day07-input.txt', 'utf8').split('\n');

console.log(commandLines);

let directories = [];
let totalSize = 0;

const handleCommands = (command) => {};
const handleFiles = (command) => {};

commandLines.forEach((commandLine) => {
  const command = commandLine.split(' ');
  if (command[0] === '$') handleCommands(command);
  else if (command[0] !== 'dir') handleFiles(command);
});
