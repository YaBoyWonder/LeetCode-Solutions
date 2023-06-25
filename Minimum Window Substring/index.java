class Solution {
    public String minWindow(String s, String t) {
        String output = "";
        
        if (s == null | t == null || s.isEmpty() || t.isEmpty()) {return "";}
        HashMap<Character, Integer> map = new HashMap<>();

        for (int i=0; i<t.length(); i++) {
            char temp = t.charAt(i);
            map.put(temp, map.getOrDefault(temp, 0) + 1);
        }

        int i=0, j=0, count=map.size(), left=0, right=s.length()-1, min = s.length();
        boolean found = false;
        //System.out.println("Value at [1] -> " + s.charAt(1) + "\n");
        while (j<s.length()) {
            char temp=s.charAt(j++); //moving j-pointer forwards to finding the substring(s)
            //System.out.println("TEMP VALUE -> " + temp + "\n");
            if (map.containsKey(temp)) {
                map.put(temp, map.get(temp) - 1);
                if (map.get(temp) == 0) {
                    count-=1;
                }
            }
            if (count > 0) continue;
            while (count == 0) {
                char startingChar = s.charAt(i++); //moving the i-pointer fowards now
                if (map.containsKey(startingChar)) {
                    map.put(startingChar, map.get(startingChar) + 1);
                    if (map.get(startingChar) > 0) { //removed uncesscary starting-char in substring
                        count+=1;
                    }
                }                
            }

            if ((j-i) < min) {
                left = i;
                right = j;
                min = j-i;
                //System.out.println("RIGHT: " + right + "  LEFT: " + left + "  MIN: " + min);
                found=true;
            }
        }
        
        return !found ? "" : s.substring(left - 1, right);
    }
}