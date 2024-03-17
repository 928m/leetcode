var maxProfit = function(prices) {
    let curr = 0;
    let next = 1;
    let maxProfit = 0;

    while(next < prices.length) {
        if (prices[curr] < prices[next]) {
            maxProfit = Math.max(prices[next] - prices[curr], maxProfit);
        } else {
            curr = next;
        }
        next += 1;
    }

    return maxProfit;
};

maxProfit([7,1,5,3,6,4])