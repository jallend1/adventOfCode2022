// Day 05 of Advent of Code 2022

const fs = require('fs');
const inputFile = fs.readFileSync('day05-input.txt', 'utf8').split('\n');

const extractCrates = (line) => {
  const crates = [];
  for (let i = 1; i <= 33; i += 4) {
    crates.push(line[i]);
  }
  return crates;
};

const extractMovementData = (rawData) => {
  const movementData = [];
  rawData.forEach((line) => {
    const destinationStack = parseInt(line[line.length - 1]);
    const sourceStack = parseInt(line[line.length - 6]);
    const numberToMove = parseInt(
      line.length === 18 ? line[5] : line[5] + line[6]
    );
    movementData.push({ numberToMove, sourceStack, destinationStack });
  });
  return movementData;
};

const compileStackData = (rawStackData) => {
  rawStackData.forEach((line) => {
    const crateContents = extractCrates(line);
    crateContents.map((crate, index) => {
      // If blank space, we got no crates on that stack
      if (crate !== ' ') {
        stackData[index].push(crate);
      }
    });
  });
};

const crateMover9000 = (numOfCrates, sourceStack, destinationStack) => {
  // Takes the top crate (First in the array) and moves it to the destination stack
  // Repeats the process for the number of crates specified
  for (let i = 0; i < numOfCrates; i++) {
    const movedCrate = stackData[sourceStack].shift();
    stackData[destinationStack].unshift(movedCrate);
  }
};

const crateMover9001 = (numOfCrates, sourceStack, destinationStack) => {
  // CrateMover9001 is capable of moving multiple crates at once
  const movedCrates = stackData[sourceStack].splice(0, numOfCrates);
  stackData[destinationStack].unshift(...movedCrates);
};

const moveCrates = (movementData) => {
  movementData.forEach((moveOrder) => {
    const {
      numberToMove: crates,
      sourceStack: source,
      destinationStack: destination
    } = moveOrder;
    crateMover9000(crates, source - 1, destination - 1);
    crateMover9001(crates, source - 1, destination - 1);
  });
};

const findTopCrates = (stackData) => {
  // Retrieves the name of the top crate on each stack
  const topCrates = [];
  stackData.forEach((stack) => {
    topCrates.push(stack[0]);
  });
  return topCrates;
};

const rawMovementData = inputFile.slice(10);
const movementData = extractMovementData(rawMovementData);

const rawStackData = inputFile.slice(0, 8);
const stackData = [...Array(9)].map(() => []);

compileStackData(rawStackData);
moveCrates(movementData);

console.log(findTopCrates(stackData));
