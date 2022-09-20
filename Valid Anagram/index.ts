function isAnagram(s: string, t: string): boolean {
    let value:boolean = true;

    let firstArray: Array<string> = [];
    let secondArray: Array<string> = [];

    for (let i = 0; i < s.length; i++) {
        firstArray.push(s[i]);
    }
    for (let i = 0; i < t.length; i++) {
        secondArray.push(t[i]);
    }

    if (firstArray.length !== secondArray.length) {
        return false;
    }

    firstArray = firstArray.sort();
    secondArray = secondArray.sort();

    //console.log(`First Array Values: ${firstArray}\nSecond Array Values: ${secondArray}`);

    for (let i = 0; i < secondArray.length; i++) {
        
        if (firstArray[i] !== secondArray[i]) {
            return false;
        }
        
    } 



    return value;
};

        // for (let j = 0; j < secondArray.length; j++) {
        //     if (firstArray[i].includes(secondArray[j])) {
        //         secondArray.splice(i, j);
        //         break;
        //     } else {

        //         if (j + 1 === secondArray.length) {
        //             return false;
        //         }
        //     }


    //    }