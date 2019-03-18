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
  if (distance >=2500); {
  return 'cannot travel that far';
  break;
  }
   
  
  else if (distance >=2000); {
    return "25";
    break;
}
   
    
  else if (distance <=399); {
    return "0";
    break;
  }
  
    
  else (distance <1999); {
    return distance*264*0.02;
    break;
  }
}
 //43, 48)).to.equal(1320)//