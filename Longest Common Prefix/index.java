import java.util.Arrays;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        
        Arrays.sort(strs);
        
        String input_1 = strs[0];
        String input_2 = strs[strs.length - 1];
        String output = "";
        int counter = 0;
        while (counter < input_1.length() && counter < input_2.length()) {
            if (input_1.charAt(counter) == input_2.charAt(counter)) {
                output += input_1.charAt(counter);
                ++counter;
            } else {
                counter = 201;
            }
        }

        return output;
    }
}