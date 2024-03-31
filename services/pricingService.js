function calculateTotalPrice(baseDistance, perKmPrice, fixPrice, distance) {
    let totalPrice = fixPrice * 100; 
    if (distance > baseDistance) {
      totalPrice += (distance - baseDistance) * perKmPrice * 100;
    }
    return totalPrice / 100; 
  }
  
  module.exports = { calculateTotalPrice };
  