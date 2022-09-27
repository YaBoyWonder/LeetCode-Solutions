function reverse(x: number): number {
    //I mean, for a medium question we take it haha
    let value = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    let integer_value : number = value;

    return integer_value > 0x7FFFFFFF || integer_value < -0x7FFFFFFF ? 0 : integer_value;
	
};
