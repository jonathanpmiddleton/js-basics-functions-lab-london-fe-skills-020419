// Code your solution in this file!
const hqBlock=42;

function distanceFromHqInBlocks(block) {
  return Math.abs(block-hqBlock);
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock-endBlock)*264;
}



 //43, 48)).to.equal(1320)//