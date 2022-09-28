    /* CHECK CHARACTER FROM STARTING
    EX: BABY
    WORD ARRAY EQUALS VALUE OF B    
    WORD ARRAY DOES NOT CONTAIN A
        A. GETS ADDED TO ARRAY
    
    B IS CONTAINED IN THE INDEX OF THE ARRAY
        WE BREAK THE FOR loop
        GET THE MAX VALUE BETWEEN OUTPUT AND THE LENGTH OF ARRAY
    */

    //Code is from index.ts, just removed the commented out part.
function lengthOfLongestSubstring(s: string): number {

    let output = 0;


    for (let i = 0; i < s.length; i++) {

        let word = s[i];

        for (let j = i + 1; j < s.length; j++) {

            if (word.indexOf(s[j]) !== -1) {
                break;
            } else {
                word += s[j];
            }

        }
        
        output = Math.max(word.length, output);
    }

    return output;

};