function isPalindrome2(s: string): boolean {

    let input: string = s;
    let array: Array<string> = [];
    input = input.toLowerCase();

    // for (let i = 0; i < input.length; i++) {


    //     if (/_/g.test(input.charAt(i))) {
    //         array.push(input.charAt(i));
    //     } else {
    //         if (/\W/g.test(input.charAt(i)) === false) {
    //             array.push(input.charAt(i));
    //         }
    //     }

    // }

    input = s.replace(/[^A-Za-z0-9]/g, '');

    let normal_string = array.join("");
    console.log("NORMAL STRING: " + normal_string);
    let backward_string: string = array.join("");
    backward_string = [...backward_string].reverse().join("");
    console.log("BACKWARD STRING: " + backward_string);

    let end_place:number = backward_string.length - 1;

    //var re = /[^A-Za-z0-9]/g;
    //normal_string = normal_string.replace(re, '');
    var len = input.length;
    for (var i = 0; i < len/2; i++) {
      if (input[i] !== input[len - 1 - i]) {
          return false;
      }
    }

    return true;

    // if (normal_string.isPalindrome(backward_string)) {
        
    // }

    for (let x = 0; x < normal_string.length; x++) {

        //console.log("Value being compared with: " + normal_string[x] + "\nOther Value Used: " + backward_string[end_place]);
        if (normal_string[x] !== backward_string[end_place]) {
            return false;
        }
        end_place--;
    }

    return true;

    //return normal_string === backward_string ? true : false;

    // if (normal_string === backward_string) {
    //     return true;
    // } else {
    //     return false;
    // }


};