function maxProfit(prices: number[]): number {
    let check_profit : number = 0;
    let firstVal:number = 0;
    let secondVal:number = 1;

    while (secondVal < prices.length) {
        
        if (prices[firstVal] < prices[secondVal]) {
            let profit:number = prices[secondVal] - prices[firstVal];
            check_profit = Math.max(profit, check_profit);
        } else {
            firstVal = secondVal;
        };
        secondVal++;

    }

    return check_profit;
};

//This my code before, its just that I removed the commented-out part