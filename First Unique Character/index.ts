function firstUniqChar(s: string): number {

    let lengthTotal : number = s.length;
    console.log("Length of String:  ", lengthTotal);
    let stringInput : Array<string> = [];
    let letters : Array<string> = [];
  
    for (let i = 0; i < s.length; ++i) {
        //PUSHES CODE INTO THE ARRAY
       // console.log("Value being pushed in:  ", s.charAt(i))
        stringInput.push(s.charAt(i));
    }
  
   // console.log(stringInput);
    //let counterVal : number = 0;
  
    for (let i = 0; i < lengthTotal; ++i) {
  
      let found:boolean = true;
  
      //console.log("String Array Value:  ", stringInput[i]);
     // var found:boolean = true;
  
      for (let x = i + 1; x <= lengthTotal; ++x) {
  
          found = true;
  
          // console.log("Original Value:  ", stringInput[i], "Comparing Value:  ", stringInput[x]);
  //a-A-pp 
  //1 not -1
          
          //counterVal = letters.length;
  
         // for (let r = 0; r < counterVal; ++r) {
  
            //console.log(letters[i]);
  
            if (letters.includes(stringInput[i])) {
              found = false;
              //console.log("CHARACTER ALREADY FOUND -->  TRUE");
              break;
            }
          //}
  
          if (stringInput[i] === stringInput[x]) {
  
            letters.push(stringInput[i]);
  
            found = false;
            //console.log("NOT VALID");
            break;
          }
  
          
  
      }
  
      if (found) {
        //console.log("FOUND:  ", found);
        return i;
      }
  
    }
  
    return -1;
  
  
  
    
  };