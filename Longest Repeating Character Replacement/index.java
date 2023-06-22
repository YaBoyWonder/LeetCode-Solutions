class Solution {
    public int characterReplacement(String s, int k) {
        int mostCommon=0, max=0;
        Map<Character, Integer> map = new HashMap<>(); //creating a key, pair list
        int left=0, right=0;
        for (; right<s.length(); right++) {
            map.put(s.charAt(right), map.getOrDefault(s.charAt(right), 0) + 1);
            mostCommon = Math.max(mostCommon, map.get(s.charAt(right)));
            if (mostCommon + k < right-left + 1) {map.put(s.charAt(left), map.getOrDefault(s.charAt(left), 0) - 1); left++;}
            max = Math.max(max, right-left+1);
        }
        return max;
    }
}