function maxProfit1(prices: number[]): number {
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
    // for (let y:number = 0; y < prices.length; ++y) {
    //     if (prices[y] < prices[y+1]) {

    //     for (let x:number = y+1; x < prices.length; ++x) {
    //             let profit = prices[x] - prices[y];
    //             if (profit > 0) {  
    //                 check_profit = Math.max(profit, check_profit);
    //             } else {

    //             }
          
    //       }
    //     }
    // }
    return check_profit;
};

//THIS WORKS WITH THE TEST-CASES; HOWEVER -> IS CREATING TIME EXCEEDED