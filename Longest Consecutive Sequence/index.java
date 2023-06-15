import java.util.*;
class Solution {
    public int longestConsecutive(int[] nums) {
        LinkedHashSet<Integer> set = new LinkedHashSet<Integer>();       
        int calc = 0;
        for (int index : nums) { set.add(index); }
        if (set.size() < 1) { return calc;}
        ArrayList<Integer> list = new ArrayList<>(set);
        Collections.sort(list);
        calc = 1;
        int max = 1;
        for (int i = 0; i < list.size(); i++) {
            if (i + 1 >= list.size()) { return Math.max(calc, max); }
            if ((list.get(i) + 1) == list.get(i + 1)) { calc++; } 
            else { if (calc > max) { max = calc; calc = 1; } else { calc = 1; } }
        }
        return max;
    }
}