const fs = require('fs');
const cleaningZones = fs.readFileSync('day04-input.txt', 'utf8').split('\n');

let totalOverlap = 0;
let someOverlap = 0;

const breakIntoGroups = (array) => {
  const groupAssignment = array.split(',');
  const groupOne = groupAssignment[0].split('-').map((zone) => parseInt(zone));
  const groupTwo = groupAssignment[1].split('-').map((zone) => parseInt(zone));
  if (checkCompleteOverlap(groupOne, groupTwo)) totalOverlap++;
  if (checkOverlap(groupOne, groupTwo)) someOverlap++;
};

const isNumberInRange = (number, range) => {
  return number >= range[0] && number <= range[1];
};

const checkCompleteOverlap = (arrOne, arrTwo) => {
  return (
    (arrOne[0] <= arrTwo[0] && arrOne[1] >= arrTwo[1]) ||
    (arrTwo[0] <= arrOne[0] && arrTwo[1] >= arrOne[1])
  );
};

const checkOverlap = (arrOne, arrTwo) => {
  return (
    arrOne.filter((num) => isNumberInRange(num, arrTwo)).length > 0 ||
    arrTwo.filter((num) => isNumberInRange(num, arrOne)).length > 0
  );
};

cleaningZones.forEach((cleaningZone) => {
  breakIntoGroups(cleaningZone);
});

console.log(totalOverlap);
console.log(someOverlap);
