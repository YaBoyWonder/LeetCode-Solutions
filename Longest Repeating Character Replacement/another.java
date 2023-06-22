class Solution {
    public int characterReplacement(String s, int k) {
        int[] ary = new int[26];
        int mostCommon=0, max=0;
        int left=0, right=0;
        for (; right<s.length(); right++) {
            ary[s.charAt(right) - 'A']++;
            mostCommon = Math.max(mostCommon, ary[s.charAt(right) - 'A']);
            if (right - left + 1 - mostCommon > k) {ary[s.charAt(left) - 'A']--; left++;}
            // System.out.println("Max: " + max + " Right:  " + right + "  Left:  " + left);
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}