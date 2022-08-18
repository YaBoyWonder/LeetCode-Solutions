function romanToInt(s: string): number {

	let symbols : Array<string> = [];
	let val1 : number;
	let val2 : number;
	let total : number = 0;
	
	let valMap = new Map();
	valMap.set(`I`, 1);
	valMap.set(`V`, 5);
	valMap.set(`X`, 10);
	valMap.set(`L`, 50);
	valMap.set(`C`, 100);
	valMap.set(`D`, 500);
	valMap.set(`M`, 1000);
	
	for (let y = 0; y < s.length; ++y) {
		 
		if (valMap.get(`${s.charAt(y)}`) < valMap.get(`${s.charAt(y+1)}`)) {
			
			val1 = valMap.get(`${s.charAt(y)}`);
			val2 = valMap.get(`${s.charAt(y+1)}`);
			
			total += val2 - val1;
			++y;
			console.log("TOTAL VAL <:  ", total);

		} else if (valMap.get(`${s.charAt(y)}`) > valMap.get(`${s.charAt(y+1)}`)) {
			
			val1 = valMap.get(`${s.charAt(y)}`);	
			total += val1;
			console.log("TOTAL VAL >:  ", total);

		} else {
			val1 = valMap.get(`${s.charAt(y)}`);	
			total += val1;
			console.log("TOTAL VAL:  ", total);
		}
		
		
	}
	
	return total;


};