import java.util.*;
class Solution {
    public boolean isAnagram(String s, String t) {
        char input_1[] = s.toCharArray();
        char input_2[] = t.toCharArray();
        Arrays.sort(input_1);
        Arrays.sort(input_2);
        if (Arrays.equals(input_1, input_2)) { return true; } else {return false;}
    }
}