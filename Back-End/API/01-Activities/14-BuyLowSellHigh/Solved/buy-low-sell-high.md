# Buy Low Sell High

**All students must write out their steps and get them approved by a TA before moving forward**

## Instructions

Xena is an amateur day trader. Her portfolio consists of IAG. IAG is a mineral exploration company. Xena believes IAG has opportunity based on a gut feeling she has. Xena bought 10000 shares of IAG at $1.45 per share at 10 am on 12/12/15. She ended up selling it 20 minutes later at $1.74 making a $2900 profit. Xena just made 2 months of rent in 20 minutes.

These were all the prices of IAG on 12/12/15 during a one hour period in chronological order:

$1.42, $1.32, $1.45, $1.20, $1.34, $1.74, $1.10, $1.89, $1.42, $1.90

Write an efficient function that takes an array of stock prices (assuming they are in chronological order) and the shares purchased. The function would determine the biggest profit possible during that period if someone bought the stock at the lowest price and sold it at the highest.

You must buy before you sell. No shorting.

By efficient, you should loop over the array only once!

## Bonuses

1. Put in validation so that there are at least 3 stock prices in the array
2. Consider case when the stock goes down every moment
3. You would want to return the minimum negative profit.
4. For example, if you bought at $22 and sold at $21, you would lose $1 per share. That's the best case scenario if you had to buy and sell this stock within an hour.
5. Example:
   ```javascript
   [135, 34, 25, 22, 21, 4, 1];
   ```

## Starter Code

```javascript
var iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

var biggestProfit = function(stockArray, sharesBought){
  // your code goes here
};

biggestProfit(iagStockPrices, 10000); // this should return 7600, because you could have bought it at 1.14 per share and then sold it at 1.90 per share. 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
```
