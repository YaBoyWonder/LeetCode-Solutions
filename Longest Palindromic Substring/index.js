/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {

    let counter = 1, old_counter = 0;; 
    var map1 = new Map(), map2 = new Map();
    var reversed_string = s.split("").reverse().join("");
    let array_string = [];
    let second_array = [];
    let output = "";
    //array_string.push("2");
    //console.log(`Value of Array_String:  ${array_string}`);

    if (s.length === 1) {
        return s.charAt(0);
    };

    
    for (let i = 0; i < s.length; ++i) {

        if (s.charAt(i) === reversed_string.charAt(i)) {
            console.log(`Value Same:   ${s.charAt(i)} for ${counter}`);
            //ac
            //ca
            
            //palindrome
            array_string.push(reversed_string.charAt(i));
           // output+=s.charAt(i);
            //map1.set(reversed_string.charAt(i));
            counter++;

       } else {
            //console.log(`Not Same:   ${s.charAt(i)}`);
            if (counter > old_counter) {
                old_counter = counter;     
                //map2 = map1;           
                if (s.length === 2) {
                    array_string.push(s.charAt(i));
                }
                output = `${array_string}`;
            } else {
                
            }
            //map1.clear();
            array_string = [];
            counter = 1;
       }

    }



    return output.split(",").join("");

};


