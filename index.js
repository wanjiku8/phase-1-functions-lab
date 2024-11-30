// Code your solution in this file!
// Function to calculate the number of blocks from 42nd street
function distanceFromHqInBlocks(someValue) {
    // Subtract 42 from the given value, and use Math.abs to get a positive result
    return Math.abs(someValue - 42); 
  }
  
  // Function to calculate the distance in feet from 42nd street
  function distanceFromHqInFeet(someValue) {
    // Call distanceFromHqInBlocks to get the number of blocks
    const blocks = distanceFromHqInBlocks(someValue);
    // Multiply the number of blocks by 264 to convert to feet
    return blocks * 264;
  }
  
  // Function to calculate the number of feet traveled between two blocks
  function distanceTravelledInFeet(start, destination) {
    // Subtract start from destination and multiply by 264 to get feet
    return Math.abs(destination - start) * 264;
  }
  
  // Function to calculate the fare based on the distance traveled
  function calculatesFarePrice(start, destination) {
    // Get the distance traveled in feet
    const distance = distanceTravelledInFeet(start, destination); 
    
    // If the distance is 400 feet or less, the ride is free
    if (distance <= 400) {
      return 0;
    }
    // If the distance is between 400 feet and 2000 feet, charge 2 cents per foot
    else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Only charge for distance after 400 feet
    }
    // If the distance is between 2000 feet and 2500 feet, charge a flat rate of $25
    else if (distance > 2000 && distance <= 2500) {
      return 25;
    }
    // If the distance is greater than 2500 feet, return 'cannot travel that far'
    else {
      return 'cannot travel that far';
    }
  }
  
