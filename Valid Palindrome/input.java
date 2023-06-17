class Solution {
    public boolean isPalindrome(String s) {
        String input = s.toLowerCase().replaceAll("[^a-zA-Z0-9]", "");
        for (int i = 0; i < input.length() / 2; ++i) { 
            if (input.charAt(i) != input.charAt(input.length() - 1 - i)) {return false;} }
        return true;
    }
}