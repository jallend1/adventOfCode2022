// Day 05 of Advent of Code 2022

const fs = require('fs');
const inputFile = fs.readFileSync('day05-input.txt', 'utf8').split('\n');

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

const rawMovementData = inputFile.slice(10);
const movementData = extractMovementData(rawMovementData);

const rawStackData = inputFile.slice(0, 8);
const stackData = [...Array(9)].map(() => []);

rawStackData.forEach((line) => {
  const crateContents = extractCrates(line);
  crateContents.map((crate, index) => {
    // If blank space, we got no crates on that stack
    if (crate !== ' ') {
      stackData[index].push(crate);
    }
  });
});

const processMoveOrder = (numOfCrates, sourceStack, destinationStack) => {
  // Takes the top crate (First in the array) and moves it to the destination stack
  // Repeats the process for the number of crates specified
  for (let i = 0; i < numOfCrates; i++) {
    const movedCrate = stackData[sourceStack].shift();
    stackData[destinationStack].unshift(movedCrate);
  }
};

const moveCrates = (movementData) => {
  movementData.forEach((moveOrder) => {
    const {
      numberToMove: crates,
      sourceStack: source,
      destinationStack: destination
    } = moveOrder;
    processMoveOrder(crates, source - 1, destination - 1);
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

moveCrates(movementData);
console.log(findTopCrates(stackData));
