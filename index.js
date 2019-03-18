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

function calculatesFarePrice(start, destination) {
  var distance = distanceTravelledInFeet(start, destination);
  if start-destination*264 >=2500;
  return "cannot travel that far";
    break;
  
  else if start-destination*264 >=2000;
    return "25";
    break;
    
  else if start-destination*264 <=400;
    return "0";
    break;
    
  else (start-destination) <2000;
    return Math.abs(start-destination)*264*0.02;
    break;
  }
}
 //43, 48)).to.equal(1320)//