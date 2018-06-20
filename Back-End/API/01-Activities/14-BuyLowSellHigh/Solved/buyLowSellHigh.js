var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var biggestProfit = function(stockArray, sharesBought) {

  // Check to make sure stock array is greater than 2
  if (stockArray.length > 2) {

    // Set initial minPrice, you cant buy any earlier than the first value
    var minPrice = stockArray[0];

    // Set initial max profit, your first opportunity to sell is the second number
    var maxProfit = stockArray[1] - stockArray[0];

    // Loops over the array, skipping the first value, since its already the minPrice and we can't sell when we buy
    for (var i = 1; i < stockArray.length; i++) {

      // Temp hold the current price in a variable
      var currentPrice = stockArray[i];

      // Potential profit is the current price minus the minPrice
      var potentialProfit = currentPrice - minPrice;

      // If maxProfit is less than the current potential profit, update the maxProfit
      if (maxProfit < potentialProfit) {
        maxProfit = potentialProfit;
      }

      // If minPrice is more than the currentPrice, update the minPrice
      if (minPrice > currentPrice) {
        minPrice = currentPrice;
      }
    }

    // Multiply the maxProfit by the number of shares to get the total
    return maxProfit * sharesBought;
  }
  else {

    //  Error if the array has 2 or less prices in it
    console.log("Error, you need at least 2 prices");
  }
};
