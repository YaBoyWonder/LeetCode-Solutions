class Solution {
public:
    bool isPalindrome(string s) {
        int left_to_right=0;
        int right_to_left=s.size() - 1;
        while (left_to_right < right_to_left) {
            while (!isalnum(s[left_to_right]) && left_to_right < right_to_left) {
                left_to_right++;
            }
            while (!isalnum(s[right_to_left]) && left_to_right < right_to_left) {
                right_to_left--;
            }            
            if (tolower(s[left_to_right]) != tolower(s[right_to_left])) {return false;}
            left_to_right++;
            right_to_left--;
        }
        return true;
    }
};