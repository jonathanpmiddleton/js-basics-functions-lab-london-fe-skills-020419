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

switch (calculatesFarePrice(start, destination)) {
  case 1: (start-destination)*264 >=2500;
  return "cannot travel that far";
    break;
  
  case 2: (start-destination)*264 >=2000;
    return "$25"
    break;
    
}
 //43, 48)).to.equal(1320)//