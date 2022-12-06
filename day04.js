const fs = require('fs');
const cleaningZones = fs.readFileSync('day04-input.txt', 'utf8').split('\n');

let total = 0;

const breakIntoGroups = (array) => {
  const groupAssignment = array.split(',');
  const groupOne = groupAssignment[0].split('-').map((zone) => parseInt(zone));
  const groupTwo = groupAssignment[1].split('-').map((zone) => parseInt(zone));
  if (checkRange(groupOne, groupTwo)) total++;
};

const checkRange = (arrOne, arrTwo) => {
  return (
    (arrOne[0] <= arrTwo[0] && arrOne[1] >= arrTwo[1]) ||
    (arrTwo[0] <= arrOne[0] && arrTwo[1] >= arrOne[1])
  );
};

cleaningZones.forEach((cleaningZone) => {
  breakIntoGroups(cleaningZone);
});

console.log(total);
