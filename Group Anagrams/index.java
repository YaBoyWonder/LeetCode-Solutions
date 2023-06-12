import java.util.Arrays;
import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> output = new HashMap<>();
        
        for (String input: strs) {
            char[] index = input.toCharArray();
            Arrays.sort(index);
            String key = new String(index);
            if (output.containsKey(key)) { output.get(key).add(input); }
            else { 
                List<String> list = new ArrayList<String>();
                list.add(input);
                output.put(key, list);
             }
        }
        return new ArrayList<List<String>>(output.values());
    }
}