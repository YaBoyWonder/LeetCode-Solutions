function climbStairs(n: number): number {

    let climb1:number = 1;
    let climb2:number = 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result = climb1 + climb2; //2 + 1
    //  console.log(`RESULT VALUE:  ${result}`);
      climb1 = climb2; //2
     // console.log(`DP1 VALUE:  ${climb1}`);
      climb2 = result; //3
     // console.log(`DP2 VALUE:  ${climb2}`);
    }

    /*
    
    */
    
    return result;

};