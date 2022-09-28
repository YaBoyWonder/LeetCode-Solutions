function isPalindrome(s: string): boolean {

    //same code as other, just removed the commented out parts

    let input: string = s;
    input = input.toLowerCase();
    
    //even if there is a / , we can just replace it with "nothing"
    input = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();


    var len = input.length;
    //BACKWARDS CHECKING -> REASON FOR 
    for (var i = 0; i < len/2; i++) {
      
      if (input[i] !== input[len - 1 - i]) {
          return false;
      }
    }

    return true;

};