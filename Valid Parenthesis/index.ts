function isValid(s: string): boolean {

    const hash: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']',
      };
    
      const stack: string[] = [];
    
      for (const char of s) {
       // console.log(`Char value: ${char}`);

        if (char in hash) {
            stack.push(char);
        } else {
        //WHEN THE STARTING CHARACTER IS NOT IN THE HASHMAP, THEREFORE VALUES SUCH AS ), }, AND ]
          const top = stack.pop();
          //WHEN YOUR ARE POPPING THE STRING STACK, IT IS TAKING FROM THE FIRST VALUE THAT WAS "IN" THE HASHMAP, 
          //AND USING THAT TO COMPARE WITH IT.
          if (top === undefined || hash[top] !== char) { //this line is grabbed the hashmap from the top string, and using its value to compare the string.
            return false;
          }
        }
      }
      
      //NOW NORMALLY, YOU COULD RETURN TRUE/FALSE, HOWEVER, I realized that if the stack doesn't even have any values left in it, then it is false. But if it does,
      //then it is true
      return !stack.length;
      

    // var output:boolean = true;


    // //"{[]}"

    // for (let i = 0; i < s.length; i++) {

    //     if (s.charAt(i) === '(') {

    //         if (s.charAt(i+1) !== ')') {
    //             output = false;
    //             break;
    //         }
    //     }
    //     //{ ( [ ] ) }
    //     if (s.charAt(i) === '{') {

    //         if (s.charAt(i+1) === '(') {

    //             if (s.charAt(i+2) === '[') {

    //                 if (s.charAt(i+3) !== ']') {
    //                     output = false;
    //                     break;
    //                 }
            
    //             } 

            
    //         } else if (s.charAt(i+1) !== '}') {
    //             output = false;
    //             break;
    //         }
    //     }

    //     if (s.charAt(i) === '[') {

    //         if (s.charAt(i+1) !== ']') {
    //             output = false;
    //             break;
    //         }
    //     }
    
    
    
    // }
    


    // return output;

};
