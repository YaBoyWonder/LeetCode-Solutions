function twoSum(nums: number[], target: number): number[] {
	//handles points of doing so
	let totalSum : Array<number> = [];
	//this loop will start from the beginning and make its way to the end 
	for (let x = 0; x < nums.length; ++x) {
		
		let first_val = nums[x];
		
		for (let y = x + 1; y < nums.length; ++y) {
			
			let second_val = nums[y];
			
			if (first_val + second_val === target) {
				totalSum.push(x);
				totalSum.push(y);
				return totalSum;
			};
			
		};	
	};
	
	return totalSum;
};