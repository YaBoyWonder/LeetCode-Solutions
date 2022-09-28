function lengthOfLongestSubstring2(s: string): number {



    let output = 0;

    for (let i = 0; i < s.length; i++) {

        let word = s[i];
        console.log("Word Value:  " + word);
        //CAR
        //C
        //A
        //R
        for (let j = i + 1; j < s.length; j++) {
            //c d d
            //c != d
            //cd
            if (word.indexOf(s[j]) !== -1) {
                console.log("Word Break Value:  " + word);
                break;
            } else {
                word += s[j];
            }

            // if (word.indexOf(s[j]) !== -1) break;
            // else word += s[j]
        }

        output = Math.max(word.length, output);
    }
    return output;




    // var length: number = s.length;
    // var counter: number = 1;
    // var old_stat: number = 0;

    // let array_input: Array<string> = [];

    // if (s.length === 0) {
    //     return 0;
    // }

    // for (let i = 0; i < length; i++) {

    //     if (s.charAt(i) === s.charAt(i + 1)) {

    //         if (array_input.includes(s.charAt(i))) {
    //             if (counter > old_stat) {
    //                 old_stat = counter;
    //                 console.log("Old value updated:   " + counter);
    //                 counter = 1;
    //             }

    //             counter = 1;

    //             let clear_array: Array<string> = [];
    //             array_input = clear_array;
    //             array_input.push(s.charAt(i));
    //             console.log("Pushed in Value 1: " + s.charAt(i));
    //         } else {
    //             array_input.push(s.charAt(i));
    //             console.log("Pushed in Value 54: " + s.charAt(i));

    //             if (array_input.length != 1) {
    //                 counter++;
    //             }
    //         }


    //         let clear_array: Array<string> = [];
    //         array_input = clear_array;

    //     } else {

    //         if (array_input.includes(s.charAt(i))) {

    //             if (counter > old_stat) {
    //                 old_stat = counter;
    //                // counter = 1;
    //             } 

    //             counter = 1;


    //             let clear_array: Array<string> = [];
    //             array_input = clear_array;
    //             array_input.push(s.charAt(i));
    //             console.log("Pushed in Value 2: " + s.charAt(i));


    //         } else {
    //             array_input.push(s.charAt(i));
    //             console.log("Pushed in Value 3: " + s.charAt(i));

    //             if (array_input.length != 1) {
    //                 counter++;
    //             }
    //         }

    //     }


    // }

    // if (old_stat < counter) {
    //     //console.log("Getting Called on for:  " + s);
    //     old_stat = counter;
    // }



    // return old_stat;


};